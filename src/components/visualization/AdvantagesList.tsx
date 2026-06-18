import { CheckCircleFilled } from '@ant-design/icons';
import { getProductRecord } from '@/utils/filterLogic';

interface Props {
  productId: string;
}

export default function AdvantagesList({ productId }: Props) {
  const product = getProductRecord(productId);

  if (!product) return null;

  return (
    <div className="mb-6 bg-white rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
      <div
        className="px-4 py-3 border-b flex items-center gap-2"
        style={{ backgroundColor: '#FAFAFA', borderColor: '#E5E7EB' }}
      >
        <div className="w-1 h-4 rounded-full" style={{ backgroundColor: '#7CB342' }} />
        <span className="text-sm font-semibold" style={{ color: '#4A4A4A' }}>
          产品优势
        </span>
      </div>
      <div className="p-5">
        <ul className="list-none p-0 m-0 space-y-3">
          {product.advantages.map((adv, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircleFilled
                className="flex-shrink-0 mt-0.5"
                style={{ color: '#7CB342', fontSize: 16 }}
              />
              <span className="text-sm leading-relaxed" style={{ color: '#4A4A4A' }}>
                {adv}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
