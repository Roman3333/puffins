import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface InputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  /**
   * Кастомный класс для input.
   */
  className?: string;
  /**
   * Кастомный класс для обёртки input.
   */
  wrapperClassName?: string;
  /**
   * Еще 1 флаг на страничке создания приложения. Добавляет иконки галочка/крестик если поле заполнено/не заполнено корректно. Используется вместе с флагом isCreateApp.
   */
  isValueValid?: boolean;
  /**
   * Сообщение ошибки.
   */
  message?: string;
  /**
   * Заглавие инпута.
   */
  label?: string;
}
