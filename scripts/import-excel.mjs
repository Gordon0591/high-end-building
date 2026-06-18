/**
 * Import script: reads 数据导入模板.xlsx and generates all TypeScript data files.
 * Run: node scripts/import-excel.mjs
 */
import XLSX from 'xlsx';
import fs from 'fs';

const wb = XLSX.readFile('templates/数据导入模板.xlsx');

function readSheet(name) {
  const sname = wb.SheetNames.find(n => n.trim() === name.trim());
  if (!sname) throw new Error(`Sheet not found: ${JSON.stringify(name)}. Available: ${wb.SheetNames.map(n => JSON.stringify(n)).join(', ')}`);
  const sheet = wb.Sheets[sname];
  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
  const headers = rows[0];
  return rows.slice(1).filter(r => r.some(c => c != null)).map(row => {
    const obj = {};
    headers.forEach((h, i) => { obj[h] = row[i] ?? ''; });
    return obj;
  });
}

function esc(s) { return String(s ?? '').replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n').replace(/\r/g, ''); }

// Convert Excel ID to valid TS identifier (underscore replaces non-alphanumeric)
function toEnumKey(id) {
  return String(id).replace(/[^a-zA-Z0-9]+/g, '_').replace(/^_|_$/g, '').replace(/^(\d)/, '_$1');
}

// Data fix: known inconsistencies in Excel
const SPACE_ID_FIX = {
  'exterior_wall': 'exterior wall', // Sheet 6 uses underscore, normalize to Sheet 1 value
};
const APP_ID_FIX = {
  'external_waterpoof': 'external waterproof', // typo in Sheet 7
  'external waterpoof': 'external waterproof',
  'Structural strengthen': 'structural strengthen', // case fix
};

function fixSpaceId(id) { return SPACE_ID_FIX[String(id).trim()] || String(id).trim(); }
function fixAppId(id) { return APP_ID_FIX[String(id).trim()] || String(id).trim(); }

// --- Sheet 1: 建筑空间 ---
const spaces = readSheet('1-建筑空间');
// Enum: key = underscored, value = original ID
const spaceEnum = spaces.map(s => `  ${toEnumKey(s.space_id)} = '${esc(s.space_id)}'`).join(',\n');
const spaceRecords = spaces.map(s => `  { id: BuildingSpace.${toEnumKey(s.space_id)}, label: '${esc(s.label)}', iconName: 'HomeOutlined', sortOrder: ${s.sort_order} }`).join(',\n');

// --- Sheet 2: 场景应用 ---
const sceneApps = readSheet('2-场景应用');
const appEnum = sceneApps.map(a => `  ${toEnumKey(a.app_id)} = '${esc(a.app_id)}'`).join(',\n');
const appRecords = sceneApps.map(a => `  { id: SceneApplication.${toEnumKey(a.app_id)}, label: '${esc(a.label)}', description: '${esc(a.description)}', sortOrder: ${a.sort_order} }`).join(',\n');

// --- Sheet 3: 施工流程 ---
const processes = readSheet('3-施工流程');
const processEnum = processes.map(p => `  ${toEnumKey(p.process_id)} = '${esc(p.process_id)}'`).join(',\n');
const processRecords = processes.map(p => `  { id: ConstructionProcess.${toEnumKey(p.process_id)}, label: '${esc(p.label)}', description: '${esc(p.description)}', sortOrder: ${p.sort_order} }`).join(',\n');

// --- Sheet 4: 产品系列 ---
const series = readSheet('4-产品系列');
const seriesRecords = series.map(s => `  { id: '${esc(s.series_id)}', label: '${esc(s.label)}', description: '${esc(s.description)}' }`).join(',\n');

// --- Sheet 5: 产品详情 ---
const validSpaceIds = new Set(spaces.map(s => s.space_id));
const validAppIds = new Set(sceneApps.map(a => a.app_id));

// Image filename fix: Excel → actual disk file
const IMAGE_FIX = {
  'SikaEmaco S188.jpg': 'SikaEmaco S188.png',
  'SikaEmaco 5100N.jpg': 'SikaEmaco N5100.jpg',
  'SikaAnchorFix 3010CN.jpg': 'SikaAnchorFix 3010CN.jpg',
  'SikaWrap-300C CN.jpg': 'SikaWrap-300C CN.jpg',
  'SikaCarboDur-S 1014N.jpg': 'SikaCarboDur-S 1014N.jpg',
  'Sikadur-31 STP.jpg': 'Sikadur-31CFN.png',
  'Sikadur-52 STP.jpg': 'Sikadur-52 STP.jpg',
  'Sikainject-101AP.jpg': 'Sikainject-101AP.png',
  'SikaWaterBar FB125.jpg': 'SikaWaterBar FB125.jpg',
  'SikadurCombiflex-SG.jpg': 'SikadurCombiflex-SG.jpg',
  'SikaFerroGard®-903+': 'SikaFerrogard 903+.png',
  'SikaTop-501 Seal.jpg': 'SikaTop-501 Seal.png',
  'SikaTop 540 Seal.jpg': 'SikaTop 540 Seal.png',
  'Sika Thoroseal® Plus/583.jpg': 'Sika Thoroseal(R)Plus:583.png',
  'SikaTape-F.jpg': 'SikaTape-F.jpg',
  'SikaThermal-51/52.jpg': 'SikaThermal-51/52.jpg',
  'Sikafloor-P 658.jpg': 'Sikafloor P658.png',
  'Sikalastic-M860.jpg': 'Sikalastic-860.png',
  'Sikalastic-692.jpg': 'Sikalastic-692R.png',
  'Sikalastic-685.jpg': 'Sikalastic-685.png',
  'Sikalastic-670TC.jpg': 'Sikalastic-670TC.jpg',
  'Sikasil-190.jpg': 'Sikasil-190.jpg',
  'SikaBoom 400.jpg': 'SikaBoom 400.jpg',
  'SikaSeal-429.jpg': 'SikaSeal-429.jpg',
  'SikaSeal-428.jpg': 'SikaSeal-428.jpg',
  'Sikasil-193.jpg': 'Sikasil-193.jpg',
  'Sikabond-161.jpg': 'Sikabond-161.jpg',
  'Sikabond-180.jpg': 'Sikabond-180.jpg',
  'sikafloor-2460.jpg': 'sikafloor-2460.jpg',
};

function fixImagePath(filename) {
  const key = String(filename).trim();
  if (IMAGE_FIX[key]) return IMAGE_FIX[key];
  // Try case-insensitive match
  for (const [k, v] of Object.entries(IMAGE_FIX)) {
    if (k.toLowerCase() === key.toLowerCase()) return v;
  }
  return key;
}

const products = readSheet('5-产品详情');
const productRecords = products.filter(p => p.product_id && !String(p.product_id).startsWith('←')).map(p => {
  const advs = String(p.advantages).split(/[;；]/).map(s => s.trim()).filter(Boolean);
  const certs = String(p.certifications).split(/[;；]/).map(s => s.trim()).filter(Boolean).map(c => {
    const [code, ...name] = c.split(/[：:]/);
    return { code: (code ?? '').trim(), name: name.join(':').trim() };
  }).filter(c => c.code);
  const rawSpaces = String(p.applicable_spaces ?? '').split(/[;；]/).map(s => s.trim()).filter(Boolean);
  const rawApps = String(p.applicable_scene_apps ?? '').split(/[;；]/).map(s => s.trim()).filter(Boolean);
  // Fix known data issues and filter invalid IDs
  const spaces2 = rawSpaces.map(fixSpaceId).filter(id => validSpaceIds.has(id));
  const apps2 = rawApps.map(fixAppId).filter(id => validAppIds.has(id));
  return {
    id: esc(p.product_id),
    seriesId: esc(p.series_id),
    processId: esc(p.process_id),
    label: esc(p.label),
    fullName: esc(p['Full name'] ?? p.full_name ?? ''),
    imagePath: `images/products/${esc(fixImagePath(p.image_filename))}`,
    description: esc(p.description),
    advantages: advs,
    certifications: certs,
    applicableSpaces: spaces2,
    applicableSceneApps: apps2,
    diagramPosition: esc(p.diagram_layer_position ?? ''),
    diagramLabel: esc(p.diagram_layer_label ?? ''),
  };
});

// --- Sheet 6: 空间应用映射 ---
const spaceAppMap = readSheet('6-空间应用映射');

// --- Sheet 7: 施工方案系列映射 ---
const appProcessMap = readSheet('7-施工方案系列映射');

// --- Sheet 8: 产品方案映射 (optional — may be replaced by Sheet 9) ---
let processSeriesMap = [];
try {
  processSeriesMap = readSheet('8-产品方案映射').filter(r => r.series_id && !String(r.series_id).includes('去除'));
} catch (e) {
  console.log('Sheet 8 not found — using Sheet 9 only for product mapping');
}

// --- Sheet 9: 流程产品映射 (NEW: process_id → product_id 直接关联) ---
let processProductMap = [];
try {
  processProductMap = readSheet('9-流程产品映射').filter(r => r.process_id && r.product_id && !String(r.product_id).startsWith('←'));
} catch (e) {
  console.log('Sheet 9 not found — skipping direct process→product mapping');
}

// ============== GENERATE FILES ==============
const srcDir = 'src/data';

// --- types/index.ts ---
const typesContent = `// Auto-generated from Excel — do not edit manually

/** 建筑空间 — 第1级 */
export enum BuildingSpace {
${spaceEnum}
}

/** 场景应用 — 第2级 */
export enum SceneApplication {
${appEnum}
}

/** 施工流程 — 第3级 */
export enum ConstructionProcess {
${processEnum}
}

// --- 记录类型 ---

export interface BuildingSpaceRecord {
  id: BuildingSpace; label: string; iconName: string; sortOrder: number;
}
export interface SceneApplicationRecord {
  id: SceneApplication; label: string; description: string; sortOrder: number;
}
export interface ConstructionProcessRecord {
  id: ConstructionProcess; label: string; description: string; sortOrder: number;
}
export interface SeriesRecord {
  id: string; label: string; description: string;
}
export interface Certification {
  code: string; name: string;
}

export type DiagramLayerPosition = 'foundation' | 'wall' | 'roof' | 'floor' | 'wet_area' | 'exterior';
export interface DiagramLayer {
  layerId: string; position: DiagramLayerPosition; label: string;
}

export interface ProductRecord {
  id: string;
  seriesId: string;
  processId: string;
  label: string;
  fullName: string;
  imagePath: string;
  advantages: string[];
  certifications: Certification[];
  applicableSpaces: BuildingSpace[];
  applicableSceneApps: SceneApplication[];
  applicableProcesses: ConstructionProcess[];
  diagramLayer: DiagramLayer;
  description: string;
}

// --- 映射类型 ---

export interface SpaceAppMapping { spaceId: BuildingSpace; appId: SceneApplication; }
export interface AppProcessMapping { appId: SceneApplication; processId: ConstructionProcess; }
export interface ProcessSeriesMapping { processId: ConstructionProcess; seriesId: string; }
export interface ProcessProductMapping { processId: ConstructionProcess; productId: string; }

// --- 施工流程步骤（右侧流程图展示用） ---
export interface ProcessFlowStep {
  processId: ConstructionProcess;
  label: string;
  description: string;
}

// --- 级联选项 ---
export interface CascadeOptions {
  availableSceneApps: SceneApplicationRecord[];
  availableProcesses: ConstructionProcessRecord[];
  availableSeries: SeriesRecord[];
  availableProducts: ProductRecord[];
}
`;

// --- spaces.ts ---
const spacesContent = `import type { BuildingSpaceRecord } from '@/types';
import { BuildingSpace } from '@/types';

export const SPACES: BuildingSpaceRecord[] = [
${spaceRecords}
];
`;

// --- sceneApps.ts ---
const sceneAppsContent = `import type { SceneApplicationRecord } from '@/types';
import { SceneApplication } from '@/types';

export const SCENE_APPS: SceneApplicationRecord[] = [
${appRecords}
];
`;

// --- constructionProcesses.ts ---
const processContent = `import type { ConstructionProcessRecord } from '@/types';
import { ConstructionProcess } from '@/types';

export const CONSTRUCTION_PROCESSES: ConstructionProcessRecord[] = [
${processRecords}
];
`;

// --- series.ts ---
const seriesContent = `import type { SeriesRecord } from '@/types';

export const SERIES: SeriesRecord[] = [
${seriesRecords}
];
`;

// --- products.ts ---
const prodLines = productRecords.map(p => {
  const advStr = p.advantages.length > 0 ? `[\n      ${p.advantages.map(a => `'${esc(a)}'`).join(',\n      ')}\n    ]` : '[]';
  const certStr = p.certifications.length > 0 ? `[\n      ${p.certifications.map(c => `{ code: '${esc(c.code)}', name: '${esc(c.name)}' }`).join(',\n      ')}\n    ]` : '[]';
  const spaceStr = p.applicableSpaces.length > 0 ? `[${p.applicableSpaces.map(s => `BuildingSpace.${toEnumKey(s)}`).join(', ')}]` : '[]';
  const appStr = p.applicableSceneApps.length > 0 ? `[${p.applicableSceneApps.map(a => `SceneApplication.${toEnumKey(a)}`).join(', ')}]` : '[]';
  return `  {
    id: '${p.id}',
    seriesId: '${p.seriesId}',
    processId: '${p.processId}',
    label: '${p.label}',
    fullName: '${p.fullName}',
    imagePath: '${p.imagePath}',
    description: '${p.description}',
    advantages: ${advStr},
    certifications: ${certStr},
    applicableSpaces: ${spaceStr},
    applicableSceneApps: ${appStr},
    applicableProcesses: [],
    diagramLayer: { layerId: 'layer-${p.id}', position: '${p.diagramPosition || 'floor'}' as any, label: '${p.diagramLabel}' },
  }`;
}).join(',\n');

const productsContent = `import type { ProductRecord } from '@/types';
import { BuildingSpace, SceneApplication } from '@/types';

export const PRODUCTS: ProductRecord[] = [
${prodLines}
];
`;

// --- mappings.ts ---
const samLines = spaceAppMap.map(m => {
  const spaceKey = toEnumKey(fixSpaceId(m.space_id));
  const appKey = toEnumKey(fixAppId(m.app_id));
  return `  { spaceId: BuildingSpace.${spaceKey}, appId: SceneApplication.${appKey}, sortOrder: ${m['Sort-order'] ?? 0} }`;
}).join(',\n');

const apmLines = appProcessMap.map(m => {
  const appKey = toEnumKey(fixAppId(m.app_id));
  const processKey = toEnumKey(m.process_id);
  return `  { appId: SceneApplication.${appKey}, processId: ConstructionProcess.${processKey} }`;
}).join(',\n');

const psmLines = processSeriesMap.map(m => {
  const processKey = toEnumKey(m.process_id);
  return `  { processId: ConstructionProcess.${processKey}, seriesId: '${esc(m.series_id)}' }`;
}).join(',\n');

const ppmLines = processProductMap.map(m => {
  const processKey = toEnumKey(m.process_id);
  return `  { processId: ConstructionProcess.${processKey}, productId: '${esc(m.product_id)}' }`;
}).join(',\n');

const mappingsContent = `import type { SpaceAppMapping, AppProcessMapping, ProcessSeriesMapping, ProcessProductMapping } from '@/types';
import { BuildingSpace, SceneApplication, ConstructionProcess } from '@/types';

// Sheet 6: 空间应用映射 (space_id → app_id, sorted by Sort-order DESC)
export const SPACE_APP_MAP: (SpaceAppMapping & { sortOrder: number })[] = [
${samLines}
];

// Sheet 7: 施工方案系列映射 (app_id → process_id)
export const APP_PROCESS_MAP: AppProcessMapping[] = [
${apmLines}
];

// Sheet 8: 产品方案映射 (process_id → series_id)
export const PROCESS_SERIES_MAP: ProcessSeriesMapping[] = [
${psmLines}
];

// Sheet 9: 流程产品映射 (process_id → product_id 直接关联)
export const PROCESS_PRODUCT_MAP: ProcessProductMapping[] = [
${ppmLines}
];
`;

// --- Write files ---
const files = {
  'src/types/index.ts': typesContent,
  [`${srcDir}/spaces.ts`]: spacesContent,
  [`${srcDir}/sceneApps.ts`]: sceneAppsContent,
  [`${srcDir}/constructionProcesses.ts`]: processContent,
  [`${srcDir}/series.ts`]: seriesContent,
  [`${srcDir}/products.ts`]: productsContent,
  [`${srcDir}/mappings.ts`]: mappingsContent,
};

for (const [fpath, content] of Object.entries(files)) {
  fs.writeFileSync(fpath, content, 'utf-8');
  console.log(`Wrote ${fpath}`);
}

console.log('\nDone! Generated all data files from Excel.');
console.log(`Spaces: ${spaces.length}, Apps: ${sceneApps.length}, Processes: ${processes.length}, Series: ${series.length}, Products: ${productRecords.length}`);
console.log(`Space-App mappings: ${spaceAppMap.length}, App-Process mappings: ${appProcessMap.length}, Process-Series mappings: ${processSeriesMap.length}`);
