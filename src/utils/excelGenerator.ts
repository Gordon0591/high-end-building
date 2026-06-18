import * as XLSX from 'xlsx';
import { SPACES } from '@/data/spaces';
import { SCENE_APPS } from '@/data/sceneApps';
import { SERIES } from '@/data/series';
import { PRODUCTS } from '@/data/products';
import { CONSTRUCTION_PROCESSES } from '@/data/constructionProcesses';
import { SPACE_APP_MAP, APP_PROCESS_MAP, PROCESS_SERIES_MAP, PROCESS_PRODUCT_MAP } from '@/data/mappings';

export function downloadExcelTemplate(): void {
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(SPACES.map((s: typeof SPACES[number]) => ({ space_id: s.id, label: s.label, sort_order: s.sortOrder }))), '1-建筑空间');
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(SCENE_APPS.map((a: typeof SCENE_APPS[number]) => ({ app_id: a.id, label: a.label, description: a.description, sort_order: a.sortOrder }))), '2-场景应用');
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(CONSTRUCTION_PROCESSES.map((p: typeof CONSTRUCTION_PROCESSES[number]) => ({ process_id: p.id, label: p.label, description: p.description, sort_order: p.sortOrder }))), '3-施工流程');
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(SERIES.map((s: typeof SERIES[number]) => ({ series_id: s.id, label: s.label, description: s.description }))), '4-产品系列');
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(PRODUCTS.map((p: typeof PRODUCTS[number]) => ({
    product_id: p.id, series_id: p.seriesId, process_id: p.processId, label: p.label, full_name: p.fullName,
    description: p.description, image_path: p.imagePath,
    advantages: p.advantages.join('; '),
    certifications: p.certifications.map((c: typeof p.certifications[number]) => `${c.code}:${c.name}`).join('; '),
    applicable_spaces: p.applicableSpaces.join('; '),
    applicable_scene_apps: p.applicableSceneApps.join('; '),
    applicable_processes: p.applicableProcesses.join('; '),
    diagram_layer_position: p.diagramLayer.position, diagram_layer_label: p.diagramLayer.label,
  }))), '5-产品详情');
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(SPACE_APP_MAP.map((m: typeof SPACE_APP_MAP[number]) => ({ space_id: m.spaceId, app_id: m.appId, Sort_order: m.sortOrder }))), '6-空间应用映射');
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(APP_PROCESS_MAP.map((m: typeof APP_PROCESS_MAP[number]) => ({ app_id: m.appId, process_id: m.processId }))), '7-施工方案系列映射');
  if (PROCESS_SERIES_MAP.length > 0) {
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(PROCESS_SERIES_MAP.map((m: typeof PROCESS_SERIES_MAP[number]) => ({ process_id: m.processId, series_id: m.seriesId }))), '8-产品方案映射');
  }
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(PROCESS_PRODUCT_MAP.map((m: typeof PROCESS_PRODUCT_MAP[number]) => ({ process_id: m.processId, product_id: m.productId }))), '9-流程产品映射');
  XLSX.writeFile(wb, '西卡墅造_数据导入模板.xlsx');
}
