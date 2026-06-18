import { useState } from 'react';
import { Button } from 'antd';
import {
  PlusCircleOutlined, CloseOutlined, ShoppingCartOutlined, HolderOutlined,
} from '@ant-design/icons';
import SpaceSelector from './SpaceSelector';
import SceneAppSelector from './SceneAppSelector';
import ProcessSelector from './SeriesSelector';
import ProductSelector from './ProductSelector';
import ConfirmResetBar from './ConfirmResetBar';
import { useSolutionStore } from '@/store/useSolutionStore';
import { getProductRecord } from '@/utils/filterLogic';

export default function SelectionSidebar() {
  const selectedProduct = useSolutionStore(s => s.selectedProduct);
  const selectedProcess = useSolutionStore(s => s.selectedProcess);
  const solutionProducts = useSolutionStore(s => s.solutionProducts);
  const addProduct = useSolutionStore(s => s.addProduct);
  const removeProduct = useSolutionStore(s => s.removeProduct);
  const reorderProducts = useSolutionStore(s => s.reorderProducts);
  const canAdd = !!selectedProduct;
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-4 p-5">
      {/* Header */}
      <div className="mb-2">
        <h2 className="text-lg font-bold tracking-wide" style={{ color: '#2D2D2D' }}>
          西卡墅造高端建筑整体解决方案配置
        </h2>
        <p className="text-xs mt-1.5 leading-relaxed" style={{ color: '#999' }}>
          依次选择层级并添加产品，可添加多个产品组成完整方案
        </p>
      </div>

      {/* Level 1: 建筑空间 */}
      <div className="bg-white rounded-xl p-4 border shadow-sm" style={{ borderColor: '#ECEDF0' }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold"
            style={{ backgroundColor: '#4A4A4A', color: '#FFD100' }}>1</span>
          <span className="text-sm font-semibold" style={{ color: '#2D2D2D' }}>建筑空间</span>
        </div>
        <SpaceSelector />
      </div>

      {/* Level 2: 场景应用 */}
      <div className="bg-white rounded-xl p-4 border shadow-sm" style={{ borderColor: '#ECEDF0' }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold"
            style={{ backgroundColor: '#4A4A4A', color: '#FFD100' }}>2</span>
          <span className="text-sm font-semibold" style={{ color: '#2D2D2D' }}>场景应用</span>
        </div>
        <SceneAppSelector />
      </div>

      {/* Level 3: 施工流程 */}
      <div className="bg-white rounded-xl p-4 border shadow-sm" style={{ borderColor: '#ECEDF0' }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold"
            style={{ backgroundColor: '#4A4A4A', color: '#FFD100' }}>3</span>
          <span className="text-sm font-semibold" style={{ color: '#2D2D2D' }}>施工流程</span>
        </div>
        <ProcessSelector />
      </div>

      {/* Level 4: 产品详情 */}
      <div className="bg-white rounded-xl p-4 border shadow-sm" style={{ borderColor: '#ECEDF0' }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold"
            style={{ backgroundColor: '#4A4A4A', color: '#FFD100' }}>4</span>
          <span className="text-sm font-semibold" style={{ color: '#2D2D2D' }}>产品详情</span>
        </div>
        <div className="flex gap-2">
          <div className="flex-1"><ProductSelector /></div>
        </div>
        <div className="mt-3">
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            size="large"
            block
            disabled={!canAdd}
            onClick={addProduct}
            style={{
              backgroundColor: canAdd ? '#7CB342' : undefined,
              borderColor: canAdd ? '#7CB342' : undefined,
              color: canAdd ? '#fff' : undefined,
              fontWeight: 600,
              borderRadius: 8,
              height: 42,
            }}
          >
            添加至方案
          </Button>
        </div>
        <p className="text-xs mt-2" style={{ color: '#B0B0B0' }}>
          {selectedProcess ? '选择产品后点击「添加」加入方案' : '请先完成上层选择'}
        </p>
      </div>

      {/* Selected Products List */}
      {solutionProducts.length > 0 && (
        <div className="bg-white rounded-xl p-4 border shadow-sm" style={{ borderColor: '#ECEDF0' }}>
          <div className="flex items-center gap-2 mb-3">
            <ShoppingCartOutlined style={{ color: '#7CB342', fontSize: 16 }} />
            <span className="text-sm font-semibold" style={{ color: '#2D2D2D' }}>
              已选产品
            </span>
            <span className="ml-auto text-xs font-bold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: '#FFD100', color: '#4A4A4A' }}>
              {solutionProducts.length}
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            {solutionProducts.map((pid, idx) => {
              const product = getProductRecord(pid);
              return (
                <div
                  key={pid}
                  draggable
                  onDragStart={() => setDragIndex(idx)}
                  onDragOver={(e) => { e.preventDefault(); setDragOverIndex(idx); }}
                  onDragLeave={() => setDragOverIndex(null)}
                  onDrop={() => { if (dragIndex !== null && dragIndex !== idx) reorderProducts(dragIndex, idx); setDragIndex(null); setDragOverIndex(null); }}
                  onDragEnd={() => { setDragIndex(null); setDragOverIndex(null); }}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg cursor-default transition-colors duration-150"
                  style={{
                    opacity: dragIndex === idx ? 0.4 : 1,
                    backgroundColor: dragOverIndex === idx ? '#FFF8E1' : '#F8F9FA',
                    borderTop: dragOverIndex === idx ? '2px solid #FFD100' : '2px solid transparent',
                  }}
                >
                  <span className="flex-shrink-0 cursor-grab active:cursor-grabbing" style={{ color: '#C0C0C0', fontSize: 14 }}>
                    <HolderOutlined />
                  </span>
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: '#FFD100', color: '#4A4A4A' }}
                  >
                    {idx + 1}
                  </span>
                  <span className="flex-1 text-sm font-medium truncate" style={{ color: '#4A4A4A' }}>
                    {product?.label ?? pid}
                  </span>
                  <CloseOutlined
                    onClick={(e) => { e.preventDefault(); removeProduct(pid); }}
                    className="flex-shrink-0 cursor-pointer hover:opacity-70"
                    style={{ fontSize: 11, color: '#B0B0B0' }}
                  />
                </div>
              );
            })}
          </div>
          {solutionProducts.length > 1 && (
            <p className="text-xs mt-2" style={{ color: '#C0C0C0' }}>
              拖拽 <HolderOutlined /> 手柄可调整产品顺序
            </p>
          )}
        </div>
      )}

      {/* Confirm & Reset */}
      <ConfirmResetBar />
    </div>
  );
}
