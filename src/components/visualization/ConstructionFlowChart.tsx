import { useSolutionStore } from '@/store/useSolutionStore';
import { getProductRecord, getSceneAppRecord } from '@/utils/filterLogic';
import { CONSTRUCTION_PROCESSES } from '@/data/constructionProcesses';
import { PROCESS_PRODUCT_MAP } from '@/data/mappings';
import type { ConstructionProcess } from '@/types';

export default function ConstructionFlowChart() {
  const selectedSceneApp = useSolutionStore(s => s.selectedSceneApp);
  const confirmedProducts = useSolutionStore(s => s.confirmedProducts);
  const sceneApp = selectedSceneApp ? getSceneAppRecord(selectedSceneApp) : undefined;

  // Derive flow steps from confirmed products' process associations (Sheet 9)
  // 按产品选择顺序展示，允许多次出现同一流程
  const flowSteps: { processId: ConstructionProcess; label: string; description: string }[] = [];

  for (const pid of confirmedProducts) {
    // Find process_id for this product from Sheet 9
    const mapping = PROCESS_PRODUCT_MAP.find(m => m.productId === pid);
    const product = getProductRecord(pid);
    const processId = mapping?.processId ?? product?.processId;
    if (processId) {
      const record = CONSTRUCTION_PROCESSES.find(p => p.id === processId);
      flowSteps.push({
        processId: processId as ConstructionProcess,
        label: record?.label ?? String(processId),
        description: record?.description ?? '',
      });
    }
  }

  if (flowSteps.length === 0) return null;

  return (
    <div className="bg-white rounded-xl border p-5 h-full shadow-sm" style={{ borderColor: '#ECEDF0' }}>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1 h-4 rounded-full" style={{ backgroundColor: '#7CB342' }} />
        <span className="text-sm font-bold" style={{ color: '#2D2D2D' }}>
          定制施工流程
        </span>
      </div>

      <div className="relative">
        {flowSteps.map((step, i) => {
          const isLast = i === flowSteps.length - 1;

          return (
            <div key={step.processId} className="flex gap-2.5 relative">
              <div className="flex flex-col items-center flex-shrink-0" style={{ width: 24 }}>
                <div
                  className="relative z-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    width: i === 0 ? 24 : 18,
                    height: i === 0 ? 24 : 18,
                    backgroundColor: i === 0 ? '#FFD100' : '#FAFAFA',
                    border: i === 0 ? '2.5px solid #FFD100' : '2px solid #D9D9D9',
                  }}
                >
                  {i === 0 && (
                    <span className="text-xs font-bold" style={{ color: '#4A4A4A', fontSize: 10 }}>1</span>
                  )}
                </div>
                {!isLast && (
                  <div className="flex-1 w-0.5 min-h-[22px]" style={{ backgroundColor: '#ECEDF0' }} />
                )}
              </div>

              <div className={`flex-1 ${!isLast ? 'pb-3' : ''}`}>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xs font-bold flex-shrink-0" style={{ color: '#B0B0B0', minWidth: 16 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-semibold" style={{ color: '#4A4A4A' }}>
                    {step.label}
                  </span>
                </div>
                <p className="text-xs mt-0.5 leading-relaxed ml-[22px]" style={{ color: '#999' }}>
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t flex items-center justify-between" style={{ borderColor: '#F0F0F0' }}>
        <span className="text-xs" style={{ color: '#C0C0C0' }}>
          {flowSteps.length} 个步骤
        </span>
        <span className="text-xs font-medium px-2 py-0.5 rounded" style={{ backgroundColor: '#F0FAF0', color: '#7CB342' }}>
          按序施工
        </span>
      </div>
    </div>
  );
}
