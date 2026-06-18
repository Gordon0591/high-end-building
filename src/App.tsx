import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import AppHeader from '@/components/layout/AppHeader';
import MainLayout from '@/components/layout/MainLayout';
import Footer from '@/components/layout/Footer';
import SelectionSidebar from '@/components/sidebar/SelectionSidebar';
import SolutionPanel from '@/components/visualization/SolutionPanel';

function App() {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: '#FFD100',
          colorSuccess: '#7CB342',
          colorText: '#4A4A4A',
          colorTextSecondary: '#888888',
          colorBgContainer: '#FFFFFF',
          borderRadius: 6,
          fontFamily:
            '"PingFang SC", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif',
        },
        components: {
          Select: {
            optionSelectedBg: '#FFF8E1',
            optionActiveBg: '#FFF3CD',
          },
          Button: {
            primaryShadow: '0 2px 4px rgba(255, 209, 0, 0.3)',
          },
        },
      }}
    >
      <div className="flex flex-col h-screen">
        <AppHeader />
        <MainLayout
          sidebar={<SelectionSidebar />}
          content={<SolutionPanel />}
        />
        <Footer />
      </div>
    </ConfigProvider>
  );
}

export default App;
