import styled from 'styled-components';
import { IconT } from './icon';
import pointer from 'assets/icons/pointer.svg';

interface Props {
  src: string;
  text?: string;
  size?: number;
  handleClick?: any;
}

const Layout = styled.div<{ size?: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: url(${pointer}), pointer;

  ${({ size }) => size && `width: ${size}px`}
`;

const Face = styled.img<{ src: string }>`
  box-sizing: border-box;
  width: 100%;
  background: url(${({ src }) => src}) no-repeat center;
  background-size: contain;
`;

const Typo = styled.div`
  margin-top: 15px;
  font-size: 33px;
  width: 200px;
  color: white;
  text-align: center;
`;

function Icon({ src, text, size, handleClick }: Props & IconT) {
  return (
    <Layout size={size} onClick={handleClick}>
      <Face src={src} />
      {text && <Typo>{text}</Typo>}
    </Layout>
  );
}

export default Icon;

Icon.defaultProps = {
  text: '',
};
