import quizButton from 'assets/images/quiz/quiz-btn.png';
import styled from 'styled-components';
import spaceShip from 'assets/images/quiz/space-ship.gif';
import pointer from 'assets/icons/pointer.svg';

const QuizButton = styled.div`
  width: 919px;
  height: 155px;
  background: url(${quizButton}) no-repeat;
  background-size: cover;
  cursor: url(${pointer}), pointer;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 240px; // TODO 개선필요

  button {
    margin-left: 20px;
    width: 366px;
    height: 100%;
    font-size: 52px;
    font-weight: 400;
  }
`;

const Exploring = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
  color: #fff;
  letter-spacing: 10px;
  padding: 100px 220px;

  .space-ship {
    width: 1260px;
    height: 1080px;
    background: url(${spaceShip}) no-repeat;
    background-size: cover;
  }
`;

export { QuizButton, Layout, Exploring };
