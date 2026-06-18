import { Typography, Tag } from 'antd';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { useSolutionStore } from '@/store/useSolutionStore';
import { getSpaceRecord } from '@/utils/filterLogic';

const { Title, Text } = Typography;

export default function SolutionHeader() {
  const confirmedProducts = useSolutionStore(s => s.confirmedProducts);
  const selectedSpace = useSolutionStore(s => s.selectedSpace);
  const space = selectedSpace ? getSpaceRecord(selectedSpace) : undefined;
  const now = new Date();
  const timeStr = format(now, 'yyyy年MM月dd日 HH:mm', { locale: zhCN });
  const codeStr = `SIKA-${selectedSpace ?? 'XX'}-${format(now, 'yyyyMMddHHmm')}`;

  const baseName = selectedSpace?.replace(/\s+/g, '-') ?? '';
  const diagram1Path = `/images/diagrams/${baseName}.jpg`;

  return (
    <div className="mb-5 bg-white rounded-xl border p-5 shadow-sm" style={{ borderColor: '#ECEDF0' }}>
      <div className="flex items-center gap-3 mb-1">
        <Text className="text-xs" style={{ color: '#B0B0B0', fontFamily: 'monospace' }}>
          方案编号：{codeStr}
        </Text>
        <div className="flex-1" />
        <Text className="text-xs" style={{ color: '#B0B0B0' }}>
          {timeStr}
        </Text>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1 min-w-0">
          <Title level={3} style={{ margin: '8px 0 14px', color: '#2D2D2D', fontWeight: 700, fontSize: 22, letterSpacing: 0.5 }}>
            西卡墅造 · {space?.label ?? '—'} 技术方案说明书
          </Title>
          <div className="flex flex-wrap items-center gap-2">
            {space && (
              <Tag style={{ backgroundColor: '#4A4A4A', color: '#FFD100', border: 'none', fontWeight: 600, fontSize: 12, padding: '2px 10px', borderRadius: 4 }}>
                建筑空间：{space.label}
              </Tag>
            )}
            <Tag style={{ backgroundColor: '#FFF8E1', color: '#8B7500', border: '1px solid #FFD100', fontWeight: 600, fontSize: 12, padding: '2px 10px', borderRadius: 4 }}>
              产品方案：{confirmedProducts.length} 个
            </Tag>
          </div>
        </div>
        {/* 构造图1 — 圆形缩略图 */}
        {selectedSpace && (
          <div className="flex-shrink-0 flex flex-col items-center gap-1">
            <img
              src={diagram1Path}
              alt="构造图一"
              className="rounded-full object-cover"
              style={{ width: 72, height: 72, border: '2px solid #ECEDF0', backgroundColor: '#FAFBFC' }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <Text className="text-xs" style={{ color: '#B0B0B0' }}>构造图一</Text>
          </div>
        )}
      </div>
    </div>
  );
}
