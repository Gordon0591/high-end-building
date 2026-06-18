import { Select } from 'antd';
import { useSolutionStore } from '@/store/useSolutionStore';
import { useCascadeOptions } from '@/hooks/useCascadeOptions';

export default function ProductSelector() {
  const selectedProcess = useSolutionStore((s) => s.selectedProcess);
  const selectedProduct = useSolutionStore((s) => s.selectedProduct);
  const setProduct = useSolutionStore((s) => s.setProduct);
  const { availableProducts } = useCascadeOptions();

  return (
    <Select<string>
      placeholder="请选择产品"
      value={selectedProduct}
      onChange={(val) => setProduct(val)}
      disabled={!selectedProcess}
      style={{ width: '100%' }}
      size="large"
      options={availableProducts.map((p) => ({
        value: p.id,
        label: (
          <div className="flex flex-col py-0.5">
            <span className="text-sm font-medium" style={{ color: '#4A4A4A' }}>{p.label}</span>
            {p.fullName && (
              <span className="text-xs mt-0.5 truncate" style={{ color: '#B0B0B0' }}>
                {p.fullName.length > 35 ? p.fullName.slice(0, 35) + '…' : p.fullName}
              </span>
            )}
          </div>
        ),
      }))}
      notFoundContent={selectedProcess ? '该施工流程下暂无匹配产品' : '请先选择施工流程'}
      popupMatchSelectWidth={false}
    />
  );
}
