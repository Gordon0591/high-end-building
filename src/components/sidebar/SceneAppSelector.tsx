import { Select } from 'antd';
import { useSolutionStore } from '@/store/useSolutionStore';
import { useCascadeOptions } from '@/hooks/useCascadeOptions';
import { getSceneAppRecord } from '@/utils/filterLogic';
import type { SceneApplication } from '@/types';

export default function SceneAppSelector() {
  const selectedSpace = useSolutionStore((s) => s.selectedSpace);
  const selectedSceneApp = useSolutionStore((s) => s.selectedSceneApp);
  const setSceneApp = useSolutionStore((s) => s.setSceneApp);
  const { availableSceneApps } = useCascadeOptions();

  return (
    <Select<SceneApplication>
      placeholder="请选择场景应用"
      value={selectedSceneApp}
      onChange={(val) => setSceneApp(val)}
      disabled={!selectedSpace}
      style={{ width: '100%' }}
      size="large"
      options={availableSceneApps.map((a) => {
        const record = getSceneAppRecord(a.id);
        return {
          value: a.id,
          label: (
            <div className="flex flex-col py-0.5">
              <span className="text-sm font-medium" style={{ color: '#4A4A4A' }}>{a.label}</span>
              {record?.description && (
                <span className="text-xs mt-0.5 truncate" style={{ color: '#B0B0B0' }}>
                  {record.description.length > 40 ? record.description.slice(0, 40) + '…' : record.description}
                </span>
              )}
            </div>
          ),
        };
      })}
      notFoundContent={selectedSpace ? '该空间下暂无可用场景应用' : '请先选择建筑空间'}
      popupMatchSelectWidth={false}
      optionLabelProp="label"
    />
  );
}
