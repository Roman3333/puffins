import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { HeaderPuffins } from '../HeaderPuffins';
import './PuffinsLayout.scss';

export const PuffinsLayout: React.FC = () => {
  const { pathname } = useLocation();
  const isPuffinsPage = pathname === '/puffins';

  return (
    <div className={clsx('puffins-layout', isPuffinsPage && 'puffins-layout--with-bg')}>
      {pathname === '/puffins' && <HeaderPuffins />}

      <main>
        <Outlet />
      </main>
    </div>
  );
};
