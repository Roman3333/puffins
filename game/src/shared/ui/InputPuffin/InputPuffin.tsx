import { forwardRef } from 'react';
import clsx from 'clsx';
import { InputProps } from './types';
import Success from '@/shared/assets/svg/success.svg?react';
import Error from '@/shared/assets/svg/error.svg?react';
import './InputPuffin.scss';

type TInput = HTMLInputElement;

export const InputPuffin = forwardRef<TInput, InputProps>((props, ref) => {
  const {
    className,
    wrapperClassName,
    isValueValid,
    name,
    value,
    type,
    readOnly,
    label,
    message,
    ...rest
  } = props;

  return (
    <div className={clsx('input-wrapper', wrapperClassName)}>
      <div className="input-wrapper__top">
        {label && <p className="input-wrapper__label">{label}</p>}

        {message && (
          <>
            <p className="input-wrapper__error">{message}</p>
            <Error width={24} height={24} className="input-wrapper__icon" />
          </>
        )}
      </div>

      <input
        ref={ref}
        className={clsx('input-wrapper__puffin', className, {
          error: message,
        })}
        name={name}
        value={value}
        type={type}
        readOnly={readOnly}
        {...rest}
      />

      {value && isValueValid && (
        <Success width={24} height={24} className="input-wrapper__icon" />
      )}
    </div>
  );
});

InputPuffin.displayName = 'Input';
