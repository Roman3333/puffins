import { Title } from '@/shared/ui';
import { TaskItem } from '../TaskItem/TaskItem';
import { TaskItemProps } from '../TaskItem/types';
import './TasksList.scss';

const data: TaskItemProps[] = [
  {
    id: 1,
    img: '/images/auth-bg.webp',
    name: 'Name by',
    title: 'Single step task',
    coins: 250,
    xp: 150,
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
    title: 'Educational task',
    coins: 250,
    xp: 450,
    type: 'open',
    isLocked: false,
    steps: [
      {
        id: 's5',
        step_index: 1,
        title: 'Read article',
        description: null,
        type: 'external',
        step_metadata: { redirect_url: 'https://react.dev' },
      },
      {
        id: 's6',
        step_index: 2,
        title: 'Answer quiz',
        description: 'Test your knowledge',
        type: 'manual_review',
        step_metadata: { prompt: 'Provide your quiz answers' },
      },
    ],
  },
  {
    id: 5,
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
    id: 6,
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

export const TasksList = () => {
  return (
    <>
      <div className="puffin-tasks__top">
        <Title type="h1" size="x" stroke="green">
          PUFFIN TASK
        </Title>
      </div>

      <div className="puffin-tasks__list">
        {data.map((item) => (
          <TaskItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};
