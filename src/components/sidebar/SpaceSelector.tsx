import { Select } from 'antd';
import { useSolutionStore } from '@/store/useSolutionStore';
import { SPACES } from '@/data/spaces';
import type { BuildingSpace } from '@/types';

export default function SpaceSelector() {
  const selectedSpace = useSolutionStore((s) => s.selectedSpace);
  const setSpace = useSolutionStore((s) => s.setSpace);

  return (
    <Select<BuildingSpace>
      placeholder="请选择建筑空间"
      value={selectedSpace}
      onChange={(val) => setSpace(val)}
      style={{ width: '100%' }}
      size="large"
      options={SPACES.map((s) => ({
        value: s.id,
        label: (
          <div className="flex items-center gap-2 py-0.5">
            <span className="text-sm font-medium" style={{ color: '#4A4A4A' }}>{s.label}</span>
            <span className="text-xs" style={{ color: '#C0C0C0' }}>#{s.sortOrder}</span>
          </div>
        ),
      }))}
      optionLabelProp="label"
    />
  );
}
