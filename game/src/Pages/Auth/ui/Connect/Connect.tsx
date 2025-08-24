import { ButtonPuffin } from '@/shared/ui';
import { ConnectProps } from './types';

export const Connect = ({ setIsConnect }: ConnectProps) => {
  return (
    <ButtonPuffin variant="img" size="l" onClick={() => setIsConnect(false)}>
      <img src="/images/btn-big.png" width={554} height={144} alt="Btn" />
    </ButtonPuffin>
  );
};
