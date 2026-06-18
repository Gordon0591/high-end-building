import { Typography, Descriptions } from 'antd';
import { getProductRecord, getSeriesRecord } from '@/utils/filterLogic';

const { Text, Title } = Typography;

interface Props {
  productId: string;
}

export default function ProductInfoCard({ productId }: Props) {
  const product = getProductRecord(productId);
  const series = product ? getSeriesRecord(product.seriesId) : undefined;

  if (!product) return null;

  return (
    <div className="mb-6 bg-white rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
      <div
        className="px-4 py-3 border-b flex items-center gap-2"
        style={{ backgroundColor: '#FAFAFA', borderColor: '#E5E7EB' }}
      >
        <div className="w-1 h-4 rounded-full" style={{ backgroundColor: '#7CB342' }} />
        <span className="text-sm font-semibold" style={{ color: '#4A4A4A' }}>
          推荐产品
        </span>
      </div>
      <div className="p-5">
        <Title level={4} style={{ margin: '0 0 4px', color: '#4A4A4A' }}>
          {product.fullName}
        </Title>
        <Text style={{ color: '#888888', fontSize: 14 }}>
          {product.description}
        </Text>
        <Descriptions
          size="small"
          column={2}
          style={{ marginTop: 16 }}
          labelStyle={{ color: '#888888', fontWeight: 500 }}
          contentStyle={{ color: '#4A4A4A' }}
        >
          <Descriptions.Item label="产品系列">
            {series?.label ?? product.seriesId}
          </Descriptions.Item>
          <Descriptions.Item label="产品型号">
            {product.label}
          </Descriptions.Item>
          <Descriptions.Item label="应用图层" span={2}>
            {product.diagramLayer.label}
          </Descriptions.Item>
        </Descriptions>
      </div>
    </div>
  );
}
