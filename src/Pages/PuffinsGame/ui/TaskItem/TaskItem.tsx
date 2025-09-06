import { useState } from 'react';
import clsx from 'clsx';
import { Title, ButtonPuffin, CheckboxPuffin } from '@/shared/ui';
import { TaskItemProps } from './types';
import './TaskItem.scss';

export const TaskItem = (props: TaskItemProps) => {
  const { id, img, name, title, steps, coins, xp, type, isLocked, handleOpenGratsModal } =
    props;
  const [checkedSteps, setCheckedSteps] = useState<string[]>([]);

  const handleAction = async () => {
    if (isLocked) return;

    try {
      handleOpenGratsModal({ id, coins, xp });
    } catch (error) {
      console.log(error);
    }
  };

  const toggleStep = (stepId: string) => {
    setCheckedSteps((prev) =>
      prev.includes(stepId) ? prev.filter((s) => s !== stepId) : [...prev, stepId]
    );
  };

  return (
    <div className={clsx('puffins-task', { disabled: isLocked })}>
      <img
        className="puffins-task__img"
        src={img}
        width={104}
        height={104}
        alt={`${name} img`}
      />

      <div className="puffins-task__content">
        <span className="puffins-task__name">{name}</span>

        <Title
          className="puffins-task__title"
          type="h3"
          variant="third"
          size="xm"
          font="montserrat"
        >
          {title}
        </Title>

        <div className="puffins-task__steps">
          {steps.map((step) => (
            <div key={step.id} className="puffins-task__step">
              {steps.length > 1 && (
                <CheckboxPuffin
                  checked={checkedSteps.includes(step.id)}
                  onCheckedChange={() => toggleStep(step.id)}
                />
              )}
              <p className="puffins-task__text">{step.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="puffins-task__stat">
        <div className="puffins-task__items">
          <div className="puffins-task__item">
            <img src="/images/fish-coin.png" width={28} height={28} alt="Fish" />
            <span className="puffins-task__count">{`+${coins}`}</span>
          </div>
          <div className="puffins-task__item">
            <span className="puffins-task__xp">XP</span>
            <span className="puffins-task__count">{`+${xp}`}</span>
          </div>
        </div>

        <ButtonPuffin
          className="puffins-task__btn"
          weight="bold"
          variant="drip"
          onClick={handleAction}
        >
          {type}
        </ButtonPuffin>
      </div>

      {isLocked && (
        <div className="puffins-task__locked">
          <img src="/images/lock.png" width={40} height={57} alt="Lock" />
          <p className="puffins-task__locked-text">
            Please link your Twitter / X and Discord accounts to continue.
          </p>
        </div>
      )}
    </div>
  );
};
