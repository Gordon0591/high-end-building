import { Button } from 'antd';
import { FileWordOutlined, DownloadOutlined } from '@ant-design/icons';
import { useSolutionStore } from '@/store/useSolutionStore';
import { generateAndDownloadDocx } from '@/utils/docxGenerator';

export default function ExportBar() {
  const isConfirmed = useSolutionStore((s) => s.isConfirmed);
  const confirmedProducts = useSolutionStore((s) => s.confirmedProducts);

  const handleExport = async () => {
    try {
      await generateAndDownloadDocx();
    } catch (err) {
      console.error('Word 导出失败:', err);
    }
  };

  if (!isConfirmed || confirmedProducts.length === 0) return null;

  return (
    <div className="flex flex-col items-center pt-6 mt-6 border-t" style={{ borderColor: '#ECEDF0' }}>
      <Button
        type="primary"
        icon={<FileWordOutlined />}
        size="large"
        onClick={handleExport}
        style={{
          backgroundColor: '#FFD100',
          borderColor: '#FFD100',
          color: '#4A4A4A',
          fontWeight: 700,
          height: 50,
          paddingInline: 40,
          fontSize: 16,
          borderRadius: 12,
          boxShadow: '0 4px 14px rgba(255, 209, 0, 0.35)',
        }}
      >
        <DownloadOutlined className="mr-1" />
        导出 Word 技术方案书 ({confirmedProducts.length} 个产品)
      </Button>
      <p className="text-xs mt-3" style={{ color: '#C0C0C0' }}>
        生成 .docx 格式文件，可用 Microsoft Word 或 WPS 打开编辑
      </p>
    </div>
  );
}
