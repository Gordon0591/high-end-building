import { Select } from 'antd';
import { useSolutionStore } from '@/store/useSolutionStore';
import { useCascadeOptions } from '@/hooks/useCascadeOptions';
import type { ConstructionProcess } from '@/types';

export default function ProcessSelector() {
  const selectedSceneApp = useSolutionStore((s) => s.selectedSceneApp);
  const selectedProcess = useSolutionStore((s) => s.selectedProcess);
  const setProcess = useSolutionStore((s) => s.setProcess);
  const { availableProcesses } = useCascadeOptions();

  return (
    <Select<ConstructionProcess>
      placeholder="请选择施工流程"
      value={selectedProcess}
      onChange={(val) => setProcess(val)}
      disabled={!selectedSceneApp}
      style={{ width: '100%', borderRadius: 8 }}
      size="large"
      options={availableProcesses.map((p) => ({
        value: p.id,
        label: (
          <div className="flex flex-col py-0.5">
            <span className="text-sm font-medium" style={{ color: '#4A4A4A' }}>{p.label}</span>
            {p.description && (
              <span className="text-xs mt-0.5 truncate" style={{ color: '#B0B0B0' }}>
                {p.description.length > 45 ? p.description.slice(0, 45) + '…' : p.description}
              </span>
            )}
          </div>
        ),
      }))}
      notFoundContent={selectedSceneApp ? '该场景应用下暂无可用施工流程' : '请先选择场景应用'}
      popupMatchSelectWidth={false}
    />
  );
}
