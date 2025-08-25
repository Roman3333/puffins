export interface Step {
  id: string;
  step_index: number;
  title: string;
  description: string | null;
  type: string;
  step_metadata: Record<string, any>;
}

export interface TaskItemProps {
  id: number;
  img: string;
  name: string;
  title: string;
  coins: number;
  xp: number;
  steps: Step[];
  /**
   * Тип кнопки.
   */
  type: 'claim' | 'follow' | 'connect' | 'open' | 'ciose';
  /**
   * Флаг, заблокирована ли карточка.
   */
  isLocked: boolean;
}
