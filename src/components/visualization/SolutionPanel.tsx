import { Empty } from 'antd';
import { FileSearchOutlined } from '@ant-design/icons';
import { useSolutionStore } from '@/store/useSolutionStore';
import SolutionHeader from './SolutionHeader';
import BuildingDiagram from './BuildingDiagram';
import ConstructionFlowChart from './ConstructionFlowChart';
import ProductDetailRow from './ProductDetailRow';
import ExportBar from './ExportBar';

export default function SolutionPanel() {
  const isConfirmed = useSolutionStore(s => s.isConfirmed);
  const confirmedProducts = useSolutionStore(s => s.confirmedProducts);

  if (!isConfirmed || confirmedProducts.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <Empty
          image={<FileSearchOutlined style={{ fontSize: 72, color: '#C0C0C0' }} />}
          description={
            <div className="text-center">
              <p className="text-base font-semibold mb-2" style={{ color: '#888' }}>
                请在左侧配置解决方案
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#B0B0B0' }}>
                依次选择 建筑空间 → 场景应用 → 施工流程 → 产品详情
              </p>
              <p className="text-sm" style={{ color: '#B0B0B0' }}>
                点击「添加」将产品加入方案，完成后点击「确认方案」
              </p>
            </div>
          }
        />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Solution Header */}
      <SolutionHeader />

      {/* Top Row: Building Diagram (left) + Construction Flow Chart (right) */}
      <div className="flex flex-col lg:flex-row gap-5 mb-5">
        <div className="flex-1 min-w-0">
          <BuildingDiagram />
        </div>
        <div className="flex-shrink-0" style={{ width: 280 }}>
          <ConstructionFlowChart />
        </div>
      </div>

      {/* Below: Product Details */}
      <div>
        {confirmedProducts.map((pid, i) => (
          <div key={pid}>
            {confirmedProducts.length > 1 && (
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: '#FFD100', color: '#4A4A4A' }}
                >
                  {i + 1}
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#B0B0B0' }}>
                  产品 {i + 1} / {confirmedProducts.length}
                </span>
                <div className="flex-1 h-px" style={{ backgroundColor: '#ECEDF0' }} />
              </div>
            )}
            <ProductDetailRow productId={pid} />
          </div>
        ))}
      </div>

      {/* Export Bar */}
      <ExportBar />
    </div>
  );
}
