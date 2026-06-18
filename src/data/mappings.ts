import type { SpaceAppMapping, AppProcessMapping, ProcessSeriesMapping, ProcessProductMapping } from '@/types';
import { BuildingSpace, SceneApplication, ConstructionProcess } from '@/types';

// Sheet 6: 空间应用映射 (space_id → app_id, sorted by Sort-order DESC)
export const SPACE_APP_MAP: (SpaceAppMapping & { sortOrder: number })[] = [
  { spaceId: BuildingSpace.basement, appId: SceneApplication.base_repair, sortOrder: 1 },
  { spaceId: BuildingSpace.basement, appId: SceneApplication.structural_strengthen, sortOrder: 2 },
  { spaceId: BuildingSpace.basement, appId: SceneApplication.joints_waterproof, sortOrder: 3 },
  { spaceId: BuildingSpace.basement, appId: SceneApplication.external_waterproof, sortOrder: 4 },
  { spaceId: BuildingSpace.basement, appId: SceneApplication.internal_waterproof, sortOrder: 5 },
  { spaceId: BuildingSpace.basement, appId: SceneApplication.insulation, sortOrder: 6 },
  { spaceId: BuildingSpace.basement, appId: SceneApplication.floor_decor, sortOrder: 7 },
  { spaceId: BuildingSpace.basement, appId: SceneApplication.wall_decornation, sortOrder: 8 },
  { spaceId: BuildingSpace.basement, appId: SceneApplication.bonding, sortOrder: 9 },
  { spaceId: BuildingSpace.basement, appId: SceneApplication.joint_sealing, sortOrder: 10 },
  { spaceId: BuildingSpace.basement, appId: SceneApplication.fire_protection, sortOrder: 11 },
  { spaceId: BuildingSpace.roofing, appId: SceneApplication.base_repair, sortOrder: 1 },
  { spaceId: BuildingSpace.roofing, appId: SceneApplication.joints_waterproof, sortOrder: 2 },
  { spaceId: BuildingSpace.roofing, appId: SceneApplication.external_waterproof, sortOrder: 3 },
  { spaceId: BuildingSpace.roofing, appId: SceneApplication.insulation, sortOrder: 4 },
  { spaceId: BuildingSpace.roofing, appId: SceneApplication.floor_decor, sortOrder: 5 },
  { spaceId: BuildingSpace.roofing, appId: SceneApplication.joint_sealing, sortOrder: 6 },
  { spaceId: BuildingSpace.exterior_wall, appId: SceneApplication.base_repair, sortOrder: 1 },
  { spaceId: BuildingSpace.exterior_wall, appId: SceneApplication.joint_sealing, sortOrder: 2 },
  { spaceId: BuildingSpace.exterior_wall, appId: SceneApplication.joints_waterproof, sortOrder: 3 },
  { spaceId: BuildingSpace.exterior_wall, appId: SceneApplication.external_waterproof, sortOrder: 4 },
  { spaceId: BuildingSpace.exterior_wall, appId: SceneApplication.insulation, sortOrder: 5 },
  { spaceId: BuildingSpace.exterior_wall, appId: SceneApplication.wall_decornation, sortOrder: 6 },
  { spaceId: BuildingSpace.exterior_wall, appId: SceneApplication.joint_sealing, sortOrder: 7 },
  { spaceId: BuildingSpace.windows, appId: SceneApplication.insulation, sortOrder: 1 },
  { spaceId: BuildingSpace.windows, appId: SceneApplication.joint_sealing, sortOrder: 2 }
];

// Sheet 7: 施工方案系列映射 (app_id → process_id)
export const APP_PROCESS_MAP: AppProcessMapping[] = [
  { appId: SceneApplication.base_repair, processId: ConstructionProcess.cleaning },
  { appId: SceneApplication.base_repair, processId: ConstructionProcess.repairing },
  { appId: SceneApplication.base_repair, processId: ConstructionProcess.levelling },
  { appId: SceneApplication.base_repair, processId: ConstructionProcess.concrete_protection },
  { appId: SceneApplication.base_repair, processId: ConstructionProcess.primer },
  { appId: SceneApplication.structural_strengthen, processId: ConstructionProcess.refurbishment },
  { appId: SceneApplication.joints_waterproof, processId: ConstructionProcess.crack_inject },
  { appId: SceneApplication.joints_waterproof, processId: ConstructionProcess.joints_treatment },
  { appId: SceneApplication.internal_waterproof, processId: ConstructionProcess.waterproofing1 },
  { appId: SceneApplication.internal_waterproof, processId: ConstructionProcess.reforceing },
  { appId: SceneApplication.external_waterproof, processId: ConstructionProcess.waterproofing2 },
  { appId: SceneApplication.external_waterproof, processId: ConstructionProcess.waterproofing3 },
  { appId: SceneApplication.external_waterproof, processId: ConstructionProcess.reforceing },
  { appId: SceneApplication.insulation, processId: ConstructionProcess.insulating },
  { appId: SceneApplication.wall_decornation, processId: ConstructionProcess.finishing },
  { appId: SceneApplication.wall_decornation, processId: ConstructionProcess.protecting },
  { appId: SceneApplication.floor_decor, processId: ConstructionProcess.finishing },
  { appId: SceneApplication.joint_sealing, processId: ConstructionProcess.sealing },
  { appId: SceneApplication.fire_protection, processId: ConstructionProcess.sealing },
  { appId: SceneApplication.bonding, processId: ConstructionProcess.finishing }
];

// Sheet 8: 产品方案映射 (process_id → series_id)
export const PROCESS_SERIES_MAP: ProcessSeriesMapping[] = [

];

// Sheet 9: 流程产品映射 (process_id → product_id 直接关联)
export const PROCESS_PRODUCT_MAP: ProcessProductMapping[] = [
  { processId: ConstructionProcess.cleaning, productId: '西卡标准基面前处理' },
  { processId: ConstructionProcess.repairing, productId: 'SikaEmaco S188' },
  { processId: ConstructionProcess.repairing, productId: 'SikaMonotop-102 CN' },
  { processId: ConstructionProcess.refurbishment, productId: 'SikaAnchorFix 3010CN' },
  { processId: ConstructionProcess.refurbishment, productId: 'SikaWrap-300C CN' },
  { processId: ConstructionProcess.refurbishment, productId: 'SikaCarboDur-S 1014N' },
  { processId: ConstructionProcess.refurbishment, productId: 'Sikadur-31 STP' },
  { processId: ConstructionProcess.refurbishment, productId: 'Sikadur-52 STP' },
  { processId: ConstructionProcess.crack_inject, productId: 'Sikadur-52 CN' },
  { processId: ConstructionProcess.crack_inject, productId: 'Sikainject-101AP' },
  { processId: ConstructionProcess.joints_treatment, productId: 'SikaWaterBar FB125' },
  { processId: ConstructionProcess.joints_treatment, productId: 'SikadurCombiflex-SG' },
  { processId: ConstructionProcess.joints_treatment, productId: 'SikaTape-F' },
  { processId: ConstructionProcess.levelling, productId: 'SikaEmaco 5100N' },
  { processId: ConstructionProcess.concrete_protection, productId: 'SikaFerrogard-903' },
  { processId: ConstructionProcess.waterproofing1, productId: 'SikaTop-501 Seal' },
  { processId: ConstructionProcess.primer, productId: 'Sikafloor-P 658' },
  { processId: ConstructionProcess.waterproofing1, productId: 'SikaTop 540 Seal' },
  { processId: ConstructionProcess.waterproofing1, productId: 'Sika Thoroseal® Plus/583' },
  { processId: ConstructionProcess.waterproofing2, productId: 'Sikalastic-M860' },
  { processId: ConstructionProcess.waterproofing2, productId: 'Sikalastic-692' },
  { processId: ConstructionProcess.waterproofing2, productId: 'Sikalastic-685' },
  { processId: ConstructionProcess.waterproofing2, productId: 'Sikalastic® 670 TC' },
  { processId: ConstructionProcess.reforceing, productId: 'SikaTape-F' },
  { processId: ConstructionProcess.reforceing, productId: 'Sikafelt' },
  { processId: ConstructionProcess.insulating, productId: 'SikaThermal-51/52' },
  { processId: ConstructionProcess.insulating, productId: 'SikaBoom S' },
  { processId: ConstructionProcess.finishing, productId: 'Sikabond-161' },
  { processId: ConstructionProcess.finishing, productId: 'Sikabond-180' },
  { processId: ConstructionProcess.finishing, productId: 'Sikafloor-2460' },
  { processId: ConstructionProcess.sealing, productId: 'Sikasil-190' },
  { processId: ConstructionProcess.sealing, productId: 'SikaSeal-429' },
  { processId: ConstructionProcess.sealing, productId: 'SikaSeal-428' },
  { processId: ConstructionProcess.sealing, productId: 'Sikasil-193' }
];
