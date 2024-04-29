import styled from 'styled-components';
import { BoxShadowInner } from 'styles/BoxShadow.styled';

const Layout = styled.div`
  margin: 24px 0 0 0;
  padding: 100px 160px;
  width: 1550px;
  ${BoxShadowInner}
  background: #000;
  color: #fff;
`;

function Doc() {
  return (
    <Layout>
      <ol>
        <li>먼저 my memo를 켜보세요</li>
        <li>외계인의 단서를 읽고 바탕화면 폴더의 alien girl을 열어보세요!</li>
        <li>
          단서에 맞는 외계인은 누구?👽 에일리언걸은 총 몇 명일까요?
          맞춰보세요 😬
        </li>
      </ol>
    </Layout>
  );
}
export default Doc;
