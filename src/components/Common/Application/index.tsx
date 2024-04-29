import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { appState, defaultAppState } from 'store';
import styled from 'styled-components';
import { AppT } from 'types/app';
import Icon from 'components/Common/Icon';
import Window from 'components/Common/Window';

interface Props extends AppT {
  style?: any;
  zIndex?: number;
  defaultX?: number;
  defaultY?: number;
  children?: React.ReactElement;
  Render?: (
    appInfo: AppT & {
      open?: boolean;
      set: any;
      zIndex?: number;
      defaultX?: number;
      defaultY?: number;
    }
  ) => React.ReactElement;
}

const Layout = styled.div`
  width: fit-content;
  margin: 0;
`;

function Application({
  id,
  name,
  src,
  style,
  defaultX,
  defaultY,
  zIndex,
  Render,
  children,
}: Props) {
  const setAppState = useSetRecoilState(appState);
  const [open, set] = useState(false);

  const handleDoubleClick = ({ id, name, src }: AppT) => {
    set(true);
    setAppState(({ apps }) => ({
      id,
      name,
      src,
      apps: apps.find((app) => app.id === id)
        ? apps
        : [...apps, { id, name, src }],
    }));
  };

  const handleClose = ({ id }: AppT) => {
    set(false);
    setAppState(({ apps }) => ({
      ...defaultAppState,
      apps: apps.filter((app) => app.id !== id),
    }));
  };

  return (
    <Layout onDoubleClick={() => handleDoubleClick({ id, src, name })}>
      <>
        <Icon text={name} src={src} size={130} />
        {Render &&
          Render({ open, set, id, name, src, defaultX, defaultY, zIndex })}
        {!Render && open && (
          <Window
            id={id}
            title={name}
            src={src}
            open={open}
            style={{ ...style, zIndex: zIndex }}
            defaultX={defaultX}
            defaultY={defaultY}
            onClose={() => handleClose({ id, src, name })}
          >
            <>{children && <>{children}</>}</>
          </Window>
        )}
      </>
    </Layout>
  );
}

export default Application;
