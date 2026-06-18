import type { BuildingSpaceRecord } from '@/types';
import { BuildingSpace } from '@/types';

export const SPACES: BuildingSpaceRecord[] = [
  { id: BuildingSpace.basement, label: '地下空间', iconName: 'HomeOutlined', sortOrder: 1 },
  { id: BuildingSpace.roofing, label: '屋面', iconName: 'HomeOutlined', sortOrder: 2 },
  { id: BuildingSpace.exterior_wall, label: '外墙', iconName: 'HomeOutlined', sortOrder: 3 },
  { id: BuildingSpace.windows, label: '窗户', iconName: 'HomeOutlined', sortOrder: 4 }
];
