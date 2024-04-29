import { useRecoilState } from 'recoil';
import { appState } from 'store';
import styled, { css } from 'styled-components';
import Clock from 'components/Common/TaskBar/Clock';
import Start from 'components/Common/TaskBar/Start';
import {
  DecoLayout,
  Deco,
  Divider,
} from 'components/Common/TaskBar/TaskBar.styled';
import { BoxShadowInner } from 'styles/BoxShadow.styled';
import questionMark from 'assets/icons/question-mark.png';
import diary from 'assets/icons/diary.png';
import sound from 'assets/icons/sound.png';
import mp3 from 'assets/icons/mp3.png';
import computer from 'assets/icons/computer.png';
import pointer from 'assets/icons/pointer.svg';

const Layout = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 0;
  width: 100%;
  height: 196px;
  margin: 0;
  padding: 26px 32px;
  box-sizing: border-box;
  font-size: 55px;
  background: silver;

  .left {
    display: flex;
    height: 100%;
    width: 100%;

    .center {
      display: flex;
      height: 100%;
      width: 3694px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 28px;
    ${BoxShadowInner}
  }
`;

const AppBlock = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  width: 950px;
  padding: 0 26px;
  margin-right: 20px;
  box-sizing: border-box;
  background: silver;
  box-shadow: inset -6px -6px #0a0a0a, inset 6px 6px #fff, inset -7px -7px grey,
    inset 7px 7px #dfdfdf;
  cursor: url(${pointer}), pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${({ isActive }) =>
    isActive &&
    css`
      box-shadow: inset -6px -6px #ffffff, inset 6px 6px #0a0a0a,
        inset -7px -7px #dfdfdf, inset 7px 7px #808080;
    `}

  span {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .title {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  img {
    height: 79px;
    margin-right: 31px;
  }
`;

function TaskBar() {
  const [{ id: activateId, apps }, setApp] = useRecoilState(appState);

  return (
    <Layout>
      <div className='left'>
        <Start />
        <DecoLayout>
          <Divider reverse />
          <Divider />
          <Deco src={questionMark} />
          <Deco src={mp3} />
          <Deco src={computer} />
          <Divider />
          <Divider reverse />
        </DecoLayout>
        <div className='center'>
          {apps.length > 0 &&
            apps.map(({ id, name, src }) => (
              <AppBlock
                className='applications'
                key={id}
                isActive={id === activateId}
                onClick={() => setApp((prev) => ({ ...prev, id }))}
              >
                <span>
                  <img src={src} />
                </span>
                <div className='title'>{name}</div>
              </AppBlock>
            ))}
        </div>
      </div>
      <div className='right'>
        <Deco src={diary} style={{ width: '82px' }} />
        <Deco src={sound} style={{ width: '82px' }} />
        <Clock />
      </div>
    </Layout>
  );
}
export default TaskBar;
