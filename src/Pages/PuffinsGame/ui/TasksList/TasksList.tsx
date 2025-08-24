import { Title } from '@/shared/ui';
import { TaskItem } from '../TaskItem/TaskItem';
import { TaskItemProps } from '../TaskItem/types';
import './TasksList.scss';

const data: TaskItemProps[] = [
  {
    id: 1,
    img: '/images/auth-bg.webp',
    name: 'Name by',
    title: 'Task title',
    text: 'Follow us on X for the latest news. Be early!',
    coins: 250,
    xp: 150,
    type: 'claim',
    isLocked: false,
    isFollow: false,
  },
  {
    id: 2,
    img: '/images/auth-bg.webp',
    name: 'Name by',
    title: 'Task title',
    text: 'Follow us on X for the latest news. Be early!',
    coins: 250,
    xp: 15,
    type: 'follow',
    isLocked: false,
    isFollow: true,
  },
  {
    id: 3,
    img: '/images/auth-bg.webp',
    name: 'Name by',
    title: 'Task title',
    text: 'Follow us on X for the latest news. Be early!',
    coins: 2500,
    xp: 1500,
    type: 'connect',
    isLocked: false,
    isFollow: false,
  },
  {
    id: 4,
    img: '/images/auth-bg.webp',
    name: 'Name by',
    title: 'Task title',
    text: 'Follow us on X for the latest news. Be early!',
    coins: 250,
    xp: 450,
    type: 'open',
    isLocked: false,
    isFollow: false,
  },
  {
    id: 5,
    img: '/images/auth-bg.webp',
    name: 'Name by',
    title: 'Task title',
    text: 'Follow us on X for the latest news. Be early! Follow us on X for the latest news. Be early! Follow us on X for the latest news. Be early!',
    coins: 1250,
    xp: 150,
    type: 'ciose',
    isLocked: false,
    isFollow: true,
  },
  {
    id: 6,
    img: '/images/auth-bg.webp',
    name: 'Name by',
    title: 'Task title',
    text: 'Follow us on X for the latest news. Be early!',
    coins: 250,
    xp: 450,
    type: 'connect',
    isLocked: true,
    isFollow: false,
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
