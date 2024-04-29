import { useState } from 'react';
import styled from 'styled-components';
import window from 'assets/icons/windows.png';
import { BoxShadowOuter } from 'styles/BoxShadow.styled';

const Layout = styled.div`
  width: 326px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  ${BoxShadowOuter}

  img {
    width: 30%;
  }

  p {
    margin-left: 22px;
    font-weight: bold;
  }
`;

const ManagerLayout = styled.div`
  position: absolute;
  bottom: 48px;
  left: 0;
  background: silver;
  width: 20%;
  height: 340px;
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey,
    inset 2px 2px #dfdfdf;
`;

function Start() {
  const [open, setOpen] = useState(false);

  return (
    <Layout>
      {/** TODO */}
      <Button onClick={() => setOpen((prev) => false)}>
        <img src={window} alt='' />
        <p>Start</p>
      </Button>
      {open && (
        <ManagerLayout>
          <p>(비어 있음)</p>
        </ManagerLayout>
      )}
    </Layout>
  );
}

export default Start;
