import { Title, ButtonPuffin } from '@/shared/ui';
import './Banner.scss';

export const Banner = () => {
  return (
    <div className="puffin-banner">
      <Title size="m" font="montserrat">
        Task title
      </Title>

      <p className="puffin-banner__text">Follow us on X for the latest news. Be early!</p>

      <ButtonPuffin size="m" variant="join">
        JOIN
      </ButtonPuffin>
    </div>
  );
};
