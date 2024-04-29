import styled from 'styled-components';
import Wallpaper from 'assets/images/wallpaper.png';

const Layout = styled.div`
  display: flex;
  height: calc(100vh - 190px);
  background: url(${Wallpaper}) no-repeat center;
  background-size: cover;
  overflow: hidden;
`;

const Left = styled.div`
  width: fit-content;
  padding: 434px 104px 0;

  > div {
    margin-bottom: 175px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-right: 337px;
  box-sizing: border-box;

  .folders {
    display: flex;
    padding-bottom: 240px;
    margin-bottom: 768px;

    > * {
      margin: 0 20px;
    }
  }
`;

const QuizLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export { Layout, Left, Center, QuizLayout };
