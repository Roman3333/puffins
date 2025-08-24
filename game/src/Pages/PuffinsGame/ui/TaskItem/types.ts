export interface TaskItemProps {
  id: number;
  img: string;
  name: string;
  title: string;
  text: string;
  coins: number;
  xp: number;
  /**
   * Тип кнопки.
   */
  type: 'claim' | 'follow' | 'connect' | 'open' | 'ciose';
  /**
   * Флаг, заблокирована ли карточка.
   */
  isLocked: boolean;
  /**
   *Флаг, должен ли появиться чекбокс.
   */
  isFollow: boolean;
}
