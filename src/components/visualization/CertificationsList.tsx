import { Tag } from 'antd';
import { SafetyCertificateOutlined } from '@ant-design/icons';
import { getProductRecord } from '@/utils/filterLogic';

interface Props {
  productId: string;
}

export default function CertificationsList({ productId }: Props) {
  const product = getProductRecord(productId);

  if (!product || product.certifications.length === 0) return null;

  return (
    <div className="mb-6 bg-white rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
      <div
        className="px-4 py-3 border-b flex items-center gap-2"
        style={{ backgroundColor: '#FAFAFA', borderColor: '#E5E7EB' }}
      >
        <div className="w-1 h-4 rounded-full" style={{ backgroundColor: '#7CB342' }} />
        <span className="text-sm font-semibold" style={{ color: '#4A4A4A' }}>
          认证标准
        </span>
      </div>
      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          {product.certifications.map((cert) => (
            <Tag
              key={cert.code}
              icon={<SafetyCertificateOutlined />}
              color="#F5F5F5"
              style={{
                color: '#4A4A4A',
                border: '1px solid #E5E7EB',
                padding: '4px 10px',
                fontSize: 13,
              }}
            >
              <span style={{ fontWeight: 600 }}>{cert.code}</span>
              <span className="ml-1" style={{ color: '#888888' }}>{cert.name}</span>
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
