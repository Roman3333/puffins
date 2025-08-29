import { useRef } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { ButtonPuffin } from '@/shared/ui';
import { useOutsideClick } from '../../model/hooks/useOutsideClick';
import { PopupProps } from './types';
import X from '@/shared/assets/svg/x.svg?react';
import Discord from '@/shared/assets/svg/discord.svg?react';
import Settings from '@/shared/assets/svg/settings.svg?react';
import Copy from '@/shared/assets/svg/copy.svg?react';
import './Popup.scss';

export const Popup = (props: PopupProps) => {
  const { wrapperRef, isOpenPopup, setIsOpenPopup } = props;
  const popupRef = useRef(null);

  useOutsideClick(wrapperRef, () => setIsOpenPopup(false), [popupRef]);

  return (
    <div
      ref={popupRef}
      className={clsx('puffins-popap', {
        active: isOpenPopup,
      })}
    >
      <div className="puffins-popap__top">
        <img src="/images/avatar-popup.png" width={88} height={93} alt="Avatar" />

        <div className="puffins-popap__stat">
          <span className="puffins-popap__name">{'Dmitry CH'}</span>

          <div className="puffins-popap__items">
            <div className="puffins-popap__item">
              <img src="/images/fish-coin.png" width={28} height={28} alt="Fish" />
              <span className="puffins-popap__count">{'+250'}</span>
            </div>

            <div className="puffins-popap__item">
              <span className="puffins-popap__xp">XP</span>
              <span className="puffins-popap__count">{'+150'}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="puffins-popap__bottom">
        <div className="puffins-popap__bottom-item">
          <span className="puffins-popap__bottom-text">Social:</span>
          <div className="puffins-popap__bottom-links">
            <Link
              to="https://x.com/dailyrosamund"
              target="_blank"
              rel="noopener noreferrer"
              className="puffins-popap__bottom-link"
            >
              <X width={26} height={26} />
            </Link>

            <Link
              to="https://x.com/dailyrosamund"
              target="_blank"
              rel="noopener noreferrer"
              className="puffins-popap__bottom-link"
            >
              <Discord width={26} height={26} />
            </Link>

            <ButtonPuffin variant="orange" weight="bold">
              <Settings />
            </ButtonPuffin>
          </div>
        </div>

        <div className="puffins-popap__bottom-item">
          <span className="puffins-popap__bottom-text">Ref link:</span>
          <ButtonPuffin variant="orange" weight="bold" size="l">
            <Copy />
            Copy
          </ButtonPuffin>
        </div>
      </div>
    </div>
  );
};
