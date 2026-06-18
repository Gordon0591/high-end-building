import type { ReactNode } from 'react';

interface SectionLabelProps {
  text: string;
  icon?: ReactNode;
}

export default function SectionLabel({ text, icon }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-2 mb-2">
      {/* 绿色左边框点缀 */}
      <div className="w-1 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: '#7CB342' }} />
      {icon && (
        <span className="text-sm flex-shrink-0" style={{ color: '#888888' }}>
          {icon}
        </span>
      )}
      <span
        className="text-sm font-semibold tracking-wide uppercase"
        style={{ color: '#4A4A4A' }}
      >
        {text}
      </span>
    </div>
  );
}
