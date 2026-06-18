import type { BuildingSpaceRecord, SceneApplicationRecord, SeriesRecord, ProductRecord, ConstructionProcessRecord } from '@/types';
import { BuildingSpace, SceneApplication, ConstructionProcess } from '@/types';
import { SPACES } from '@/data/spaces';
import { SCENE_APPS } from '@/data/sceneApps';
import { SERIES } from '@/data/series';
import { PRODUCTS } from '@/data/products';
import { CONSTRUCTION_PROCESSES } from '@/data/constructionProcesses';
import { SPACE_APP_MAP, APP_PROCESS_MAP, PROCESS_SERIES_MAP, PROCESS_PRODUCT_MAP } from '@/data/mappings';

// ---- 第2级：场景应用（Sheet 6: space→app, 按 Sheet 2 sort_order 升序排列） ----

export function getAvailableSceneApps(space: BuildingSpace | null): SceneApplicationRecord[] {
  if (!space) return [];
  const ids = new Set(SPACE_APP_MAP
    .filter(m => m.spaceId === space)
    .map(m => m.appId));
  return SCENE_APPS
    .filter(a => ids.has(a.id))
    .sort((a, b) => a.sortOrder - b.sortOrder); // ASC by Sheet 2 sort_order
}

// ---- 第3级：施工流程（Sheet 7: app→process） ----

export function getAvailableProcesses(app: SceneApplication | null): ConstructionProcessRecord[] {
  if (!app) return [];
  const ids = APP_PROCESS_MAP.filter(m => m.appId === app).map(m => m.processId);
  return CONSTRUCTION_PROCESSES.filter(p => ids.includes(p.id));
}

// ---- 第4级：产品详情 ----
// 主路径: process → (Sheet 9) → product_id 直接关联
// 备用路径: process → (Sheet 8) → series_id → product (当 Sheet 8 存在时)

export function getAvailableProducts(
  _space: BuildingSpace | null,
  _app: SceneApplication | null,
  process: ConstructionProcess | null,
): ProductRecord[] {
  if (!process) return [];
  // Sheet 9: process_id → product_id 直接关联（主路径）
  const directProductIds = new Set(PROCESS_PRODUCT_MAP
    .filter(m => m.processId === process)
    .map(m => m.productId));
  // Sheet 8: process_id → series_id → product（备用路径）
  const seriesIds = new Set(PROCESS_SERIES_MAP
    .filter(m => m.processId === process)
    .map(m => m.seriesId));

  return PRODUCTS.filter(p =>
    directProductIds.has(p.id) || seriesIds.has(p.seriesId)
  );
}

// ---- 流程图 ----
// Derived from APP_PROCESS_MAP: for a given app, show all its processes in order
export function getProcessFlow(app: SceneApplication | null) {
  if (!app) return [];
  const processIds = APP_PROCESS_MAP.filter(m => m.appId === app).map(m => m.processId);
  return processIds.map(pid => {
    const record = CONSTRUCTION_PROCESSES.find(p => p.id === pid);
    return {
      processId: pid,
      label: record?.label ?? pid,
      description: record?.description ?? '',
    };
  });
}

// ---- 单条查询 ----

export function getSpaceRecord(id: BuildingSpace): BuildingSpaceRecord | undefined { return SPACES.find(s => s.id === id); }
export function getSceneAppRecord(id: SceneApplication): SceneApplicationRecord | undefined { return SCENE_APPS.find(a => a.id === id); }
export function getSeriesRecord(id: string): SeriesRecord | undefined { return SERIES.find(s => s.id === id); }
export function getProductRecord(id: string): ProductRecord | undefined { return PRODUCTS.find(p => p.id === id); }
