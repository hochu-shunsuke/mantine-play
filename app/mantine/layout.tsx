import { ReactNode } from 'react';
import { NavbarSimple } from '@/components/NavbarSimple';

export default function MantineLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 60px)' }}>
      {/* サイドナビゲーション */}
      <NavbarSimple />
      
      {/* メインコンテンツエリア */}
      <main style={{ flex: 1, padding: '2rem' }}>
        {children}
      </main>
    </div>
  );
}