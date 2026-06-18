import type { ConstructionProcessRecord } from '@/types';
import { ConstructionProcess } from '@/types';

export const CONSTRUCTION_PROCESSES: ConstructionProcessRecord[] = [
  { id: ConstructionProcess.cleaning, label: '基层前处理', description: '对基层进行清扫，疏松层的进行铲除', sortOrder: 1 },
  { id: ConstructionProcess.repairing, label: '基层修补', description: '铲除后对基层进行修补，如有必要对梁柱和基层进行加固', sortOrder: 2 },
  { id: ConstructionProcess.crack_inject, label: '裂缝处理', description: '对基层中渗水的裂缝进行注浆防水处理；或对细小裂缝进行结构注浆', sortOrder: 3 },
  { id: ConstructionProcess.refurbishment, label: '加固处理', description: '对建筑加建，扩建等梁柱，楼板等进行加固和锚固', sortOrder: 4 },
  { id: ConstructionProcess.joints_treatment, label: '接缝处理', description: '对建筑的伸缩缝，后浇带，连接缝一些风险点进行防水处理', sortOrder: 5 },
  { id: ConstructionProcess.levelling, label: '基层找平', description: '对基层进行找平，达到理想的平整度', sortOrder: 6 },
  { id: ConstructionProcess.concrete_protection, label: '混凝土保护', description: '对基层进行渗透结晶防水或者钢筋阻锈等处理，提高混凝土耐久性', sortOrder: 7 },
  { id: ConstructionProcess.primer, label: '底涂/界面处理', description: '对基层进行底涂涂刷，提高粘接性和隔离潮气', sortOrder: 8 },
  { id: ConstructionProcess.waterproofing1, label: '防水层（聚合物砂浆）', description: '使用聚合物砂浆对基层进行防水处理', sortOrder: 9 },
  { id: ConstructionProcess.waterproofing2, label: '防水层（液体涂料）', description: '使用有机防水涂料对基层进行防水处理', sortOrder: 10 },
  { id: ConstructionProcess.waterproofing3, label: '防水层（卷材）', description: '使用高分子或沥青卷材对基层进行防水处理', sortOrder: 11 },
  { id: ConstructionProcess.reforceing, label: '中间加强层', description: '施工网格布的加强层', sortOrder: 12 },
  { id: ConstructionProcess.insulating, label: '保温层', description: '施工保温材料和系统', sortOrder: 13 },
  { id: ConstructionProcess.finishing, label: '装饰层', description: '施工装饰材料', sortOrder: 14 },
  { id: ConstructionProcess.protecting, label: '装饰保护', description: '对装饰层表面进行保护，提高憎水，防碳化等性能', sortOrder: 15 },
  { id: ConstructionProcess.sealing, label: '缝隙密封收口', description: '对接缝和一些收口进行密封，提高整体美观性', sortOrder: 16 }
];
