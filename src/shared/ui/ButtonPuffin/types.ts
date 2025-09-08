import { ReactNode, MouseEvent, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  /**
   * Контент кнопки.
   */
  children: ReactNode;
  /**
   * Кастомный класс для button.
   */
  className?: string;
  /**
   * Состояние disabled.
   */
  isDisabled?: boolean;
  /**
   * Состояние загрузки в кнопке(показывается spinner).
   */
  isLoading?: boolean;
  /**
   * Колбек на клик по кнопке.
   */
  onClick?: (e: MouseEvent) => void;
  /**
   * Толщина шрифта, по умолчанию regular(400).
   */
  weight?: 'regular' | 'medium' | 'bold';
  /**
   * Размер шрифта, по умолчанию s(16px).
   */
  size?: 's' | 'm' | 'l';
  /**
   * Тема кнопки. По умолчанию primary(зеленая)
   */
  variant?:
    | 'primary'
    | 'x'
    | 'discord'
    | 'img'
    | 'join'
    | 'orange'
    | 'popup'
    | 'danger'
    | 'complete'
    | 'drip'
    | 'claim'
    | 'follow'
    | 'connect'
    | 'level'
    | 'open'
    | 'grats'
    | 'ciose';
  /**
   * Font-family title, по умолчанию rowdies.
   */
  font?: 'rowdies' | 'play-story';
}
