import { useState } from 'react';
import { Connect } from '../Connect/Connect';
import { Edit } from '../Edit/Edit';
import './Auth.scss';

export const Auth = () => {
  const [isConnect, setIsConnect] = useState(true);

  return (
    <section className="section-puffins section-puffins__bg">
      <div className="container-puffins">
        <div className="container-puffins__wrapper">
          {isConnect ? (
            <Connect setIsConnect={setIsConnect} />
          ) : (
            <Edit isConnect={isConnect} setIsConnect={setIsConnect} />
          )}
        </div>
      </div>
    </section>
  );
};
