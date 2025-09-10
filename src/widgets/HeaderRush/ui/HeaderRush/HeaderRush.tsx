import { ButtonPuffin } from '@/shared/ui';
import Sound from '@/shared/assets/svg/sound.svg?react';
import Burger from '@/shared/assets/svg/burger.svg?react';
import './HeaderRush.scss';

export const HeaderRush = () => {
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

          <ButtonPuffin className="header-rush__icon" variant="rush">
            <Burger />
          </ButtonPuffin>
        </div>
      </div>
    </header>
  );
};
