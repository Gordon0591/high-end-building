import { Button } from 'antd';
import { CheckCircleFilled, ReloadOutlined } from '@ant-design/icons';
import { useSolutionStore } from '@/store/useSolutionStore';

export default function ConfirmResetBar() {
  const solutionProducts = useSolutionStore((s) => s.solutionProducts);
  const confirm = useSolutionStore((s) => s.confirm);
  const reset = useSolutionStore((s) => s.reset);

  const canConfirm = solutionProducts.length > 0;

  return (
    <div className="flex gap-3 pt-4 border-t" style={{ borderColor: '#ECEDF0' }}>
      <Button
        type="primary"
        icon={<CheckCircleFilled />}
        size="large"
        block
        disabled={!canConfirm}
        onClick={confirm}
        style={{
          backgroundColor: canConfirm ? '#FFD100' : undefined,
          borderColor: canConfirm ? '#FFD100' : undefined,
          color: canConfirm ? '#4A4A4A' : undefined,
          fontWeight: 700,
          height: 48,
          borderRadius: 10,
          fontSize: 15,
          boxShadow: canConfirm ? '0 2px 8px rgba(255, 209, 0, 0.35)' : undefined,
        }}
      >
        确认方案 {solutionProducts.length > 0 && `(${solutionProducts.length})`}
      </Button>
      <Button
        icon={<ReloadOutlined />}
        size="large"
        onClick={reset}
        style={{
          borderColor: '#D9D9D9',
          color: '#888',
          borderRadius: 10,
          height: 48,
        }}
      >
        重置
      </Button>
    </div>
  );
}
