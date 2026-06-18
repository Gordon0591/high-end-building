import { Typography, Tag, Image } from 'antd';
import { CheckCircleFilled, SafetyCertificateOutlined, ExperimentOutlined } from '@ant-design/icons';
import { getProductRecord, getSeriesRecord } from '@/utils/filterLogic';

const { Text, Title } = Typography;

interface Props {
  productId: string;
}

export default function ProductDetailRow({ productId }: Props) {
  const product = getProductRecord(productId);
  const series = product ? getSeriesRecord(product.seriesId) : undefined;

  if (!product) return null;

  return (
    <div className="bg-white rounded-xl border mb-4 overflow-hidden" style={{ borderColor: '#ECEDF0' }}>
      <div className="flex flex-col sm:flex-row">
        {/* Left: Product Image */}
        <div className="flex-shrink-0 flex items-center justify-center p-5" style={{ width: 220, minHeight: 200, backgroundColor: '#FAFBFC' }}>
          <div className="rounded-lg overflow-hidden bg-white flex items-center justify-center" style={{ width: 180, height: 160 }}>
            <Image
              src={product.imagePath}
              alt={product.fullName}
              fallback="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjE2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+5Lqn5ZOB5Zu+54mHPC90ZXh0Pjwvc3ZnPg=="
              preview={{ mask: '查看大图' }}
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="flex-1 p-5 min-w-0 border-l" style={{ borderColor: '#F0F0F0' }}>
          {/* Product Name & Series */}
          <div className="flex items-start gap-3 mb-3">
            <div className="flex-1 min-w-0">
              <Title level={5} style={{ margin: '0 0 3px', color: '#2D2D2D', fontSize: 16, fontWeight: 600 }}>
                {product.fullName}
              </Title>
              <div className="flex flex-wrap items-center gap-2">
                {series && (
                  <Tag color="#FFF8E1" style={{ color: '#8B7500', border: '1px solid #FFD100', fontSize: 11, margin: 0, fontWeight: 500 }}>
                    {series.label}
                  </Tag>
                )}
                <Tag color="default" style={{ color: '#888', fontSize: 11, margin: 0, border: '1px solid #E5E7EB' }}>
                  {product.label}
                </Tag>
                {product.diagramLayer.label && (
                  <Tag icon={<ExperimentOutlined />} color="#F0FAF0" style={{ color: '#7CB342', border: '1px solid #C8E6C9', fontSize: 11, margin: 0 }}>
                    {product.diagramLayer.label}
                  </Tag>
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          {product.description && (
            <Text className="block text-sm mb-4 leading-relaxed" style={{ color: '#666' }}>
              {product.description}
            </Text>
          )}

          {/* Advantages */}
          {product.advantages.length > 0 && (
            <div className="mb-3">
              <Text className="text-xs font-bold block mb-2" style={{ color: '#4A4A4A' }}>
                产品优势
              </Text>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                {product.advantages.map((adv, idx) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <CheckCircleFilled className="flex-shrink-0 mt-0.5" style={{ color: '#7CB342', fontSize: 12 }} />
                    <span className="text-xs leading-snug" style={{ color: '#4A4A4A' }}>{adv}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {product.certifications.length > 0 && (
            <div>
              <Text className="text-xs font-bold block mb-2" style={{ color: '#4A4A4A' }}>
                认证标准
              </Text>
              <div className="flex flex-wrap gap-1.5">
                {product.certifications.map((cert) => (
                  <Tag
                    key={cert.code}
                    icon={<SafetyCertificateOutlined />}
                    color="#F5F5F5"
                    style={{ color: '#4A4A4A', border: '1px solid #E5E7EB', fontSize: 11, margin: 0, borderRadius: 4 }}
                  >
                    <span style={{ fontWeight: 600 }}>{cert.code}</span>
                    <span className="ml-1" style={{ color: '#888' }}>{cert.name}</span>
                  </Tag>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
