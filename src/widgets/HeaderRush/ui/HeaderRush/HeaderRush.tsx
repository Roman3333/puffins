import { useState } from 'react';
import clsx from 'clsx';
import { ButtonPuffin } from '@/shared/ui';
import { Menu } from '../Menu/Menu';
import Sound from '@/shared/assets/svg/sound.svg?react';
import Burger from '@/shared/assets/svg/burger.svg?react';
import './HeaderRush.scss';

export const HeaderRush = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header-rush">
      <div className="header-rush__wrapper">
        <ButtonPuffin className="header-rush__lead" weight="bold" size="m" variant="rush">
          LEADERBOARD
        </ButtonPuffin>

        <div className="header-rush__actions">
          <ButtonPuffin
            className="header-rush__sign"
            weight="bold"
            size="m"
            variant="rush"
          >
            Sign In
          </ButtonPuffin>

          <ButtonPuffin className="header-rush__icon" variant="rush">
            <Sound />
          </ButtonPuffin>

          <ButtonPuffin
            className="header-rush__icon"
            variant="rush"
            onClick={() => setIsMenuOpen(true)}
          >
            <Burger />
          </ButtonPuffin>
        </div>
      </div>

      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <div
        className={clsx('header-rush__blur', {
          ['active']: isMenuOpen,
        })}
        onClick={() => setIsMenuOpen(false)}
      ></div>
    </header>
  );
};
