import styled from 'styled-components';
import pointer from 'assets/icons/pointer.svg';

interface Props {
  close?: boolean;
  goBack?: boolean;
  children: any;
  onClose: any;
  onBack?: any;
}

const QuizLayout = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;
  width: 100vw;
  height: 100vh;
  background: #000;
  font-size: 96px;
  color: #fff;

  .header {
    display: flex;
    justify-content: flex-end;
    padding: 200px 520px;
    font-size: 120px;

    .back {
      position: relative;
      left: 0;
      cursor: url(${pointer}), pointer;
    }
    .close {
      cursor: url(${pointer}), pointer;
    }
  }
`;

function Layout({ close = true, goBack, children, onClose, onBack }: Props) {
  return (
    <QuizLayout>
      <div className='header'>
        {close && (
          <div className='close' onClick={onClose}>
            𝗫
          </div>
        )}
      </div>
      {children}
    </QuizLayout>
  );
}
export default Layout;
