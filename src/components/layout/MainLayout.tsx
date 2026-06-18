import type { ReactNode } from 'react';

interface MainLayoutProps {
  sidebar: ReactNode;
  content: ReactNode;
}

export default function MainLayout({ sidebar, content }: MainLayoutProps) {
  return (
    <div className="flex flex-1 overflow-hidden" style={{ height: 'calc(100vh - 64px)' }}>
      {/* Left Sidebar */}
      <aside
        className="flex-shrink-0 overflow-y-auto border-r"
        style={{
          width: 460,
          borderColor: '#ECEDF0',
          backgroundColor: '#F8F9FA',
        }}
      >
        {sidebar}
      </aside>

      {/* Right Content Area */}
      <main
        className="flex-1 overflow-y-auto"
        style={{ backgroundColor: '#F2F3F5' }}
      >
        {content}
      </main>
    </div>
  );
}
