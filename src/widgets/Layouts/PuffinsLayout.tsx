import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { HeaderPuffins } from '../HeaderPuffins';

export const PuffinsLayout: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === '/puffins' && <HeaderPuffins />}

      <main>
        <Outlet />
      </main>
    </>
  );
};
