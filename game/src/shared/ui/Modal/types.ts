import { ReactNode } from 'react';

export interface ModalProps {
  /**
   * Контент модалки.
   */
  children: ReactNode;
  /**
   * Флаг открытия модалки.
   */
  isModalOpen: boolean;
  /**
   * Колбек на закрытие модалки.
   */
  handlelCloseModal: () => void;
  /**
   * Текст title.
   */
  title?: string;
  /**
   * Размер title модалки, по умолчанию xl.
   */
  sizeTitle?: 'l' | 'xl';
  /**
   * Кастомный класс для wrapper modal.
   */
  wrapperClassname?: string;
  /**
   * Кастомный класс для title.
   */
  className?: string;
}
