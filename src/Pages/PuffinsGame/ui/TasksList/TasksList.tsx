import { useState } from 'react';
import { Title } from '@/shared/ui';
import { TaskItem } from '../TaskItem/TaskItem';
import { TaskItem as TaskItemProps } from './types';
import './TasksList.scss';
import { ModalCongratulations } from '../ModalCongratulations/ModalCongratulations';

const dataPuffins: TaskItemProps[] = [
  {
    id: 1,
    img: '/images/auth-bg.webp',
    name: 'Name by',
    title: 'Single step task',
    coins: 120,
    xp: 50,
    type: 'claim',
    isLocked: false,
    steps: [
      {
        id: 's1',
        step_index: 1,
        title: 'Follow us on X',
        description: 'Get the latest news first',
        type: 'external',
        step_metadata: { redirect_url: 'https://twitter.com' },
      },
    ],
  },
  {
    id: 2,
    img: '/images/auth-bg.webp',
    name: 'Name by',
    title: 'Multiple steps quest',
    coins: 250,
    xp: 15,
    type: 'follow',
    isLocked: false,
    steps: [
      {
        id: 's2',
        step_index: 1,
        title: 'Join Discord',
        description: null,
        type: 'external',
        step_metadata: { redirect_url: 'https://discord.gg' },
      },
      {
        id: 's3',
        step_index: 2,
        title: 'Retweet our post',
        description: null,
        type: 'manual_review',
        step_metadata: { prompt: 'Paste a link to your retweet' },
      },
    ],
  },
  {
    id: 3,
    img: '/images/auth-bg.webp',
    name: 'Name by',
    title: 'Wallet verification',
    coins: 2500,
    xp: 1500,
    type: 'connect',
    isLocked: false,
    steps: [
      {
        id: 's4',
        step_index: 1,
        title: 'Sign message',
        description: null,
        type: 'signature',
        step_metadata: { message: 'Verify your wallet ownership' },
      },
    ],
  },
  {
    id: 4,
    img: '/images/auth-bg.webp',
    name: 'Name by',
    title: 'Long description task',
    coins: 1250,
    xp: 150,
    type: 'ciose',
    isLocked: false,
    steps: [
      {
        id: 's7',
        step_index: 1,
        title: 'Follow us on Instagram',
        description: 'Be early, stay tuned',
        type: 'external',
        step_metadata: { redirect_url: 'https://instagram.com' },
      },
    ],
  },
  {
    id: 5,
    img: '/images/auth-bg.webp',
    name: 'Name by',
    title: 'Locked task',
    coins: 250,
    xp: 450,
    type: 'connect',
    isLocked: true,
    steps: [
      {
        id: 's8',
        step_index: 1,
        title: 'Unlock by linking account',
        description: null,
        type: 'manual_review',
        step_metadata: { prompt: 'Please connect your profile' },
      },
    ],
  },
];
const dataSpesials: TaskItemProps[] = [
  {
    id: 6,
    img: '/images/auth-bg.webp',
    name: 'Name by',
    title: 'Follow account',
    coins: 500,
    xp: 100,
    type: 'follow',
    isLocked: false,
    steps: [
      {
        id: 's4',
        step_index: 1,
        title: 'Follow our official Twitter account to stay updated',
        description: null,
        type: 'signature',
        step_metadata: { message: 'Verify your wallet ownership' },
      },
    ],
  },
  {
    id: 7,
    img: '/images/auth-bg.webp',
    name: 'Name by',
    title: 'Join Puffins server',
    coins: 2250,
    xp: 450,
    type: 'ciose',
    isLocked: false,
    steps: [
      {
        id: 's7',
        step_index: 1,
        title: 'Join our official Discord community',
        description: 'Be early, stay tuned',
        type: 'external',
        step_metadata: { redirect_url: 'https://instagram.com' },
      },
    ],
  },
];

export const TasksList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState({ id: 0, coins: 0, xp: 0 });

  const handleOpenGratsModal = (task: any) => {
    setIsModalOpen(true);
    setCurrentTask(task);
  };

  return (
    <>
      <div className="puffin-tasks__top">
        <Title type="h1" size="x">
          SPECIAL TASKS
        </Title>
      </div>

      <div className="puffin-tasks__list">
        {dataSpesials.map((item) => (
          <TaskItem key={item.id} {...item} handleOpenGratsModal={handleOpenGratsModal} />
        ))}
      </div>

      <div className="puffin-tasks__top">
        <Title type="h1" size="x">
          PUFFIN TASK
        </Title>
      </div>

      <div className="puffin-tasks__list">
        {dataPuffins.map((item) => (
          <TaskItem key={item.id} {...item} handleOpenGratsModal={handleOpenGratsModal} />
        ))}
      </div>

      <ModalCongratulations
        currentTask={currentTask}
        isModalEditOpen={isModalOpen}
        setIsModalEditOpen={setIsModalOpen}
      />
    </>
  );
};
