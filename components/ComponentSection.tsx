import { ReactNode } from 'react';

interface ComponentSectionProps {
  title: string;
  children: ReactNode;
  layoutType?: 'center' | 'form' | 'wide';
}

export function ComponentSection({ 
  title, 
  children, 
  layoutType = 'center' 
}: ComponentSectionProps) {
  const getLayoutClass = () => {
    switch (layoutType) {
      case 'center':
        return 'flex justify-center';
      case 'form':
        return 'max-w-2xl mx-auto';
      case 'wide':
        return 'max-w-5xl mx-auto';
      default:
        return 'flex justify-center';
    }
  };

  return (
    <section className="py-20">
      <h2 className="text-3xl font-semibold mb-16 text-center">{title}</h2>
      <div className={getLayoutClass()}>
        {children}
      </div>
    </section>
  );
}
