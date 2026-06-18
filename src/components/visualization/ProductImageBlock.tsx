import { Image, Empty } from 'antd';
import { getProductRecord } from '@/utils/filterLogic';

interface Props {
  productId: string;
}

export default function ProductImageBlock({ productId }: Props) {
  const product = getProductRecord(productId);

  if (!product) return null;

  return (
    <div className="mb-6 bg-white rounded-lg border overflow-hidden" style={{ borderColor: '#E5E7EB' }}>
      <div
        className="px-4 py-3 border-b flex items-center gap-2"
        style={{ backgroundColor: '#FAFAFA', borderColor: '#E5E7EB' }}
      >
        <div className="w-1 h-4 rounded-full" style={{ backgroundColor: '#7CB342' }} />
        <span className="text-sm font-semibold" style={{ color: '#4A4A4A' }}>
          产品展示
        </span>
      </div>
      <div className="p-6 flex justify-center">
        <div className="w-full max-w-md aspect-video bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
          <Image
            src={product.imagePath}
            alt={product.fullName}
            fallback="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+5Lqn5ZOB5Zu+54mHPC90ZXh0Pjwvc3ZnPg=="
            preview={{ mask: '点击查看大图' }}
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  );
}
