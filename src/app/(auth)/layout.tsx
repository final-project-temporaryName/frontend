import NavBar from '@/components/NavBar/NavBar';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="h-100vh w-100vw bg-white md:mx-35">
      <NavBar />
      {children}
    </div>
  );
}
