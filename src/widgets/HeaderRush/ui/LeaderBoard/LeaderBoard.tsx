import clsx from 'clsx';
import { ButtonPuffin, Title } from '@/shared/ui';
import { LeaderBoardProps } from './types';
import './LeaderBoard.scss';

export const LeaderBoard = (props: LeaderBoardProps) => {
  const { isLeaderBoardOpen, setIsLeaderBoardOpen } = props;

  return (
    <div
      className={clsx('rush-leaderboard', {
        ['active']: isLeaderBoardOpen,
      })}
    >
      <div className="header-rush__wrapper">
        <ButtonPuffin
          className="rush-leaderboard__back"
          weight="bold"
          size="m"
          variant="rush"
          onClick={() => setIsLeaderBoardOpen(false)}
        >
          BACK TO GAME
        </ButtonPuffin>

        <Title className="rush-leaderboard__title" type="h2">
          Leaderboard
        </Title>

        <div className="rush-leaderboard__right">
          <ButtonPuffin
            className="rush-leaderboard__place"
            weight="bold"
            size="m"
            variant="rush"
          >
            {null}
          </ButtonPuffin>
          <div className="rush-leaderboard__stat">
            <span className="rush-leaderboard__text">Leaderboard place:</span>
            <span className="rush-leaderboard__num">{`#${12384}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
