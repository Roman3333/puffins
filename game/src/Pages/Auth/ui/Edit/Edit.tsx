import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, ButtonPuffin, InputPuffin } from '@/shared/ui';
import { EdittProps } from './types';
import X from '@/shared/assets/svg/x.svg?react';
import Discord from '@/shared/assets/svg/discord.svg?react';
import './Edit.scss';

//TODO: доделать потом логику для isUsernameValid, пока всегда true
export const Edit = (props: EdittProps) => {
  const { isConnect, setIsConnect } = props;
  const [username, setUsername] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!username.trim()) {
        setIsUsernameValid(false);
        setErrorMessage('(please enter your username)');
        return;
      }

      setIsUsernameValid(true);
      setErrorMessage('');
      navigate('/puffins');
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    if (username.trim()) {
      setIsUsernameValid(true);
      setErrorMessage('');
      return;
    }
  }, [username]);

  return (
    <Modal
      isModalOpen={!isConnect}
      title="EDIT PROFILE"
      handlelCloseModal={() => setIsConnect(true)}
    >
      <form className="form-auth" onSubmit={handleSubmit}>
        <InputPuffin
          value={username}
          isValueValid={isUsernameValid}
          onChange={(e) => setUsername(e.target.value)}
          label="Enter Username"
          message={errorMessage}
        />

        <div className="auth-btns">
          <ButtonPuffin variant="x" size="l" font="play-story">
            <span>CONNECT X</span>
            <X width={56} height={56} />
          </ButtonPuffin>

          <ButtonPuffin variant="discord" size="l" font="play-story">
            <span>CONNECT DISCORD</span>
            <Discord width={56} height={56} />
          </ButtonPuffin>
        </div>

        <ButtonPuffin className="auth-btn" variant="img" type="submit">
          {username ? (
            <img
              src="/images/btn-small-active.png"
              width={326}
              height={70}
              alt="Btn active"
            />
          ) : (
            <img
              src="/images/btn-small-disabled.png"
              width={326}
              height={70}
              alt="Btn disabled"
            />
          )}
        </ButtonPuffin>
      </form>
    </Modal>
  );
};
