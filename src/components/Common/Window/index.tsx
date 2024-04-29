import pointer from 'assets/icons/pointer.svg';
import Draggable from 'components/Common/Draggable';
import Icon from 'components/Common/Icon';
import { useRecoilState } from 'recoil';
import { appState } from 'store';
import styled from 'styled-components';
import { BoxShadowOuter } from 'styles/BoxShadow.styled';
import { AppEnum } from 'types/app';

interface Props {
  id: AppEnum;
  open?: boolean;
  src?: string;
  title?: string;
  TitleBar?: React.ReactElement;
  style?: React.CSSProperties;
  defaultX?: number;
  defaultY?: number;
  children?: React.ReactElement;
  onClose?: any;
}

const Layout = styled.div<{ isActive: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  z-index: ${({ isActive }) => (isActive ? 11 : 10)};
  box-sizing: border-box;
  ${BoxShadowOuter}
  padding: 22px;
  font-size: 48px;
  cursor: url(${pointer}), pointer;

  .window-body {
    height: fit-content;
  }

  .title-bar {
    display: flex;
    align-items: center;
    height: 110px;
    padding: 8px 42px;

    .title-bar-text {
      display: flex;
      align-items: center;
      font-size: 48px;

      span {
        margin-left: 16px;
      }
    }
    .title-bar-controls {
      button {
        width: 87px;
        height: 76px;
        background-size: 58px;
        background-position: center;
        ${BoxShadowOuter}
        font-size: 55px;
      }
      button[aria-label='Minimize'] {
        background-position-y: bottom;
      }
    }
  }
`;

function Window({
  id,
  open,
  src,
  title,
  children,
  style,
  defaultX,
  defaultY,
  onClose,
}: Props) {
  const [{ id: activateId }, setApp] = useRecoilState(appState);
  if (!open) return <></>;

  return (
    <Draggable
      onDrag={() => setApp((prev) => ({ ...prev, id }))}
      defaultPosition={{ x: defaultX || 0, y: defaultY || 0 }}
    >
      <Layout isActive={activateId === id} style={style} className='window'>
        <div className='title-bar'>
          <div className='title-bar-text'>
            {src && <Icon src={src} size={60} />}
            <span>{title}</span>
          </div>
          <div className='title-bar-controls'>
            <button aria-label='Minimize' />
            <button aria-label='Maximize' />
            <button aria-label='Close' onClick={onClose} />
          </div>
        </div>
        <div className='window-body'>{children}</div>
      </Layout>
    </Draggable>
  );
}

export default Window;

Window.defaultProps = {
  title: '',
  style: { width: 300 },
};
