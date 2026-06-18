// Auto-generated from Excel — do not edit manually

/** 建筑空间 — 第1级 */
export enum BuildingSpace {
  basement = 'basement',
  roofing = 'roofing',
  exterior_wall = 'exterior wall',
  windows = 'windows'
}

/** 场景应用 — 第2级 */
export enum SceneApplication {
  base_repair = 'base_repair',
  structural_strengthen = 'structural strengthen',
  joints_waterproof = 'joints_waterproof',
  internal_waterproof = 'internal waterproof',
  external_waterproof = 'external waterproof',
  insulation = 'insulation',
  floor_decor = 'floor_decor',
  wall_decornation = 'wall-decornation',
  bonding = 'bonding',
  joint_sealing = 'joint_sealing',
  fire_protection = 'fire_protection'
}

/** 施工流程 — 第3级 */
export enum ConstructionProcess {
  cleaning = 'cleaning',
  repairing = 'repairing',
  crack_inject = 'crack-inject',
  refurbishment = 'refurbishment',
  joints_treatment = 'joints treatment',
  levelling = 'levelling',
  concrete_protection = 'concrete protection',
  primer = 'primer',
  waterproofing1 = 'waterproofing1',
  waterproofing2 = 'waterproofing2',
  waterproofing3 = 'waterproofing3',
  reforceing = 'reforceing',
  insulating = 'insulating',
  finishing = 'finishing',
  protecting = 'protecting',
  sealing = 'sealing'
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
