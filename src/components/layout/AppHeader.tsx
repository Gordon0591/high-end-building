import { useState } from 'react';
import { QrcodeOutlined } from '@ant-design/icons';

function getDeployUrl() {
  const { hostname, port, protocol } = window.location;
  const base = `${protocol}//${hostname}${port ? ':' + port : ''}`;
  return base + import.meta.env.BASE_URL;
}

export default function AppHeader() {
  const [showQR, setShowQR] = useState(false);
  const deployUrl = getDeployUrl();
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(deployUrl)}`;

  return (
    <header
      className="flex items-center justify-between px-6 h-16 flex-shrink-0 z-10 relative"
      style={{
        background: 'linear-gradient(135deg, #FFD100 0%, #FFE44D 60%, #FFF0A0 100%)',
        boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
      }}
    >
      <div className="flex items-center gap-3">
        <img
          src={import.meta.env.BASE_URL + 'images/sika logo.JPG'}
          alt="SIKA"
          className="h-10 w-auto rounded object-contain"
          style={{ maxHeight: 40 }}
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <button
            onClick={() => setShowQR(!showQR)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg cursor-pointer border-0 text-sm font-medium"
            style={{ backgroundColor: 'rgba(255,255,255,0.3)', color: '#4A4A4A' }}
          >
            <QrcodeOutlined style={{ fontSize: 16 }} />
            手机扫码
          </button>
          {showQR && (
            <div
              className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg p-3 z-50"
              style={{ border: '1px solid #ECEDF0' }}
            >
              <img
                src={qrSrc}
                alt="手机扫码访问"
                style={{ width: 180, height: 180, display: 'block' }}
              />
              <p className="text-xs text-center mt-2" style={{ color: '#888' }}>扫一扫在手机上打开</p>
              <p className="text-xs text-center" style={{ color: '#C0C0C0' }}>{deployUrl}</p>
            </div>
          )}
        </div>
        <span className="text-sm font-medium tracking-wide" style={{ color: '#5C4F00' }}>
          西卡中国 墅造美好生活
        </span>
      </div>
    </header>
  );
}
