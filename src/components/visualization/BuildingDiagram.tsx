import { Image } from 'antd';
import { PictureOutlined } from '@ant-design/icons';
import { useSolutionStore } from '@/store/useSolutionStore';
import { getSpaceRecord } from '@/utils/filterLogic';

export default function BuildingDiagram() {
  const selectedSpace = useSolutionStore(s => s.selectedSpace);
  const space = selectedSpace ? getSpaceRecord(selectedSpace) : undefined;
  if (!selectedSpace) return null;

  const imagePath = `${import.meta.env.BASE_URL}images/diagrams/${selectedSpace}2.jpg`;

  return (
    <div className="bg-white rounded-xl border overflow-hidden shadow-sm flex flex-col" style={{ borderColor: '#ECEDF0', height: '100%' }}>
      <div className="px-5 py-3.5 border-b flex items-center gap-2.5 flex-shrink-0" style={{ backgroundColor: '#FAFBFC', borderColor: '#F0F0F0' }}>
        <div className="w-1 h-4 rounded-full" style={{ backgroundColor: '#7CB342' }} />
        <PictureOutlined style={{ color: '#888', fontSize: 14 }} />
        <span className="text-sm font-bold" style={{ color: '#2D2D2D' }}>
          建筑构造示意图
        </span>
        {space && (
          <span className="text-xs ml-auto px-2.5 py-0.5 rounded-full" style={{ backgroundColor: '#F5F5F5', color: '#888' }}>
            {space.label}
          </span>
        )}
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-4 min-h-0">
        <Image
          src={imagePath}
          alt={`${space?.label ?? ''} 构造图二`}
          fallback="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjM1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmOWZhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSIjYjBiMGIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+6K+35pS95YWl5Zu+54mHPC90ZXh0Pjwvc3ZnPg=="
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: 6 }}
          preview={{ mask: '查看大图' }}
        />
        <p className="text-xs mt-2 flex-shrink-0" style={{ color: '#C0C0C0' }}>构造图二</p>
      </div>
    </div>
  );
}
