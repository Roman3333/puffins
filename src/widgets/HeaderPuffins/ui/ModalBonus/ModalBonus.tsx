import { useState } from 'react';
import clsx from 'clsx';
import { Modal, Title } from '@/shared/ui';
import { ModalBonusProps } from './types';
import './ModalBonus.scss';

const bonuses = [
  {
    id: 1,
    title: 'Puffins Partner',
    text: 'For holders of official partner NFT collections',
    percent: 15,
    img: '/images/test-img-1.jpg',
  },
  {
    id: 2,
    title: 'Penguin',
    text: 'Pudgy Lil / Pudgy Penguin  holder',
    percent: 20,
    img: '/images/test-img-2.jpg',
  },
  {
    id: 3,
    title: 'Hatched Puffin',
    text: 'Hold at least 1 Puffin',
    percent: 30,
    img: '/images/test-img-3.jpg',
  },
  {
    id: 4,
    title: 'Big Balls',
    text: 'Own 5 or more Puffins',
    percent: 75,
    img: '/images/test-img-4.jpg',
  },
];

export const ModalBonus = (props: ModalBonusProps) => {
  const { isModalBonusOpen, setIsModalBonusOpen } = props;
  const [activeBonus, setActiveBonus] = useState(2);

  return (
    <Modal
      isModalOpen={isModalBonusOpen}
      handlelCloseModal={() => setIsModalBonusOpen(false)}
      wrapperClassname="puffins-bonus"
    >
      <div className="puffins-bonus__top">
        <Title type="h3" size="l" variant="secondary">
          BONUS
        </Title>

        <div className="puffins-bonus__number">{'+25%'}</div>
      </div>

      <p className="puffins-bonus__text">
        The bonus does not reflect the full scope of how Abstract plans to reward and
        integrate the Puffins community
      </p>

      <div className="puffins-bonus__items">
        {bonuses.map((item) => (
          <div
            key={item.id}
            className={clsx('puffins-bonus__item', { active: item.id === activeBonus })}
            onClick={() => setActiveBonus(item.id)}
          >
            <img
              src={item.img}
              width={48}
              height={48}
              alt={item.title}
              className="puffins-bonus__img"
            />

            <div className="puffins-bonus__content">
              <div>
                <Title type="h4" variant="secondary" weight="regular" font="play-story">
                  {item.title}
                </Title>
                <p className="puffins-bonus__p">{item.text}</p>
              </div>

              <div className="puffins-bonus__number">{`+${item.percent}%`}</div>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};
