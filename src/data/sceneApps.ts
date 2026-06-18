import type { SceneApplicationRecord } from '@/types';
import { SceneApplication } from '@/types';

export const SCENE_APPS: SceneApplicationRecord[] = [
  { id: SceneApplication.base_repair, label: '基层处理', description: '对基层进行打磨，修补，找平，底涂等处理', sortOrder: 1 },
  { id: SceneApplication.structural_strengthen, label: '结构加固', description: '对建筑结构进行碳板，碳布，粘钢，灌钢，锚固等加固处理', sortOrder: 2 },
  { id: SceneApplication.joints_waterproof, label: '细部节点处理', description: '对裂缝，接缝，伸缩缝和阴阳角等细节部位进行处理', sortOrder: 3 },
  { id: SceneApplication.internal_waterproof, label: '背水面防水', description: '在室内侧进行防水处理', sortOrder: 4 },
  { id: SceneApplication.external_waterproof, label: '外防水', description: '在迎水面进行防水处理', sortOrder: 5 },
  { id: SceneApplication.insulation, label: '保温节能', description: '地下室，外墙和屋面等保温隔热系统', sortOrder: 6 },
  { id: SceneApplication.floor_decor, label: '地面装饰', description: '楼板和地面的地材施工（地坪，地板和瓷砖等）', sortOrder: 7 },
  { id: SceneApplication.wall_decornation, label: '墙面装饰', description: '墙面装饰材料的施工（装饰涂料，装饰砂浆，保护涂料和墙板）', sortOrder: 8 },
  { id: SceneApplication.bonding, label: '粘接固定', description: '木地板粘接、墙板粘接，瓷砖铺贴和线条等粘接应用', sortOrder: 9 },
  { id: SceneApplication.joint_sealing, label: '缝隙密封', description: '全屋美缝，门窗密封，地面接缝，外墙接缝等施工', sortOrder: 10 },
  { id: SceneApplication.fire_protection, label: '防火封堵', description: '缝隙防火封堵和管道贯穿防火封堵', sortOrder: 11 }
];
