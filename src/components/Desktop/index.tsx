import myEarth from 'assets/icons/earth.png';
import folder from 'assets/icons/folder.png';
import internet from 'assets/icons/internet.png';
import memo from 'assets/icons/memo.png';
import myMusic from 'assets/icons/music.png';
import myComputer from 'assets/icons/my-computer.png';
import artwork5 from 'assets/images/artwork5.png';
import artwork6 from 'assets/images/artwork6.png';
import artwork7 from 'assets/images/artwork7.png';
import artwork8 from 'assets/images/artwork8.png';
import artwork9 from 'assets/images/artwork9.png';
import artworkA from 'assets/images/artworka.png';
import artworkE from 'assets/images/artworke.png';
import artworkI from 'assets/images/artworki.jpeg';
import artworkL from 'assets/images/artworkl.jpeg';
import internetExplorer from 'assets/images/internet-explorer.gif';
import myComputerGif from 'assets/images/my-computer.gif';
import Application from 'components/Common/Application';
import {
  Center,
  Layout,
  Left,
  QuizLayout,
} from 'components/Desktop/Desktop.styled';
import Doc from 'components/Doc';
import Memo from 'components/Memo';
import Music from 'components/Music';
import Quiz from 'components/Quiz';
import { Exploring } from 'components/Quiz/Quiz.styled';
import { AppEnum } from 'types/app';

function Desktop() {
  return (
    <Layout>
      <Left>
        <Application
          id={AppEnum.Internet}
          src={internet}
          name='Internet Explorer'
        >
          <img src={internetExplorer} />
        </Application>
        <Application
          id={AppEnum.Memo}
          src={memo}
          name='My Memo'
          defaultX={1546}
          defaultY={336}
        >
          <Memo />
        </Application>
        <Application
          id={AppEnum.MyComputer}
          src={myComputer}
          defaultX={908}
          defaultY={602}
          style={{ width: '1200px' }}
          name='My Computer'
        >
          <img width='100%' src={myComputerGif} />
        </Application>
        <Application
          id={AppEnum.MyMusic}
          src={myMusic}
          name='My Music'
          defaultX={602}
          defaultY={517}
          Render={(appInfo) => <Music {...appInfo} />}
        />
        <Application id={AppEnum.MyEarth} src={myEarth} name='My Earth'>
          <Exploring>
            <div className='space-ship' />
            <p>EXPLORING...</p>
          </Exploring>
        </Application>
      </Left>
      <Center>
        <div className='folders'>
          {ALIENGIRLS.map(({ src, style, ...props }) => (
            <Application key={props.id} src={folder} {...props}>
              <img src={src} style={style} />
            </Application>
          ))}
          <Application
            id={AppEnum.Doc}
            name='사용 설명서'
            src={folder}
            defaultX={511}
            defaultY={104}
          >
            <Doc />
          </Application>
        </div>
        <QuizLayout>
          <Quiz />
        </QuizLayout>
      </Center>
    </Layout>
  );
}

export default Desktop;

const ALIENGIRLS = [
  {
    id: AppEnum.A1,
    name: 'A',
    defaultX: 511,
    defaultY: 104,
    src: artworkA,
    style: { width: '1666px', height: '1838px' },
  },
  {
    id: AppEnum.L2,
    name: 'L',
    defaultX: 211,
    defaultY: 1638,
    src: artworkL,
    style: { width: '1195px', height: '990px' },
  },
  {
    id: AppEnum.I3,
    name: 'I',
    defaultX: 2639,
    defaultY: 333,
    src: artworkI,
    style: { width: '1389', height: '990px' },
  },
  {
    id: AppEnum.E4,
    name: 'E',
    defaultX: 3280,
    defaultY: 1174,
    src: artworkE,
    style: { width: '1384px', height: '1123px' },
  },
  {
    id: AppEnum.N5,
    name: 'N',
    defaultX: 1588,
    defaultY: 1072,
    src: artwork5,
  },
  {
    id: AppEnum.G6,
    name: 'G',
    defaultX: 2937,
    defaultY: 1098,
    src: artwork6,
  },
  {
    id: AppEnum.I7,
    name: 'I',
    src: artwork7,
  },
  {
    id: AppEnum.R8,
    name: 'R',
    defaultX: 2937,
    defaultY: 1098,
    src: artwork8,
  },
  {
    id: AppEnum.L9,
    name: 'L',
    defaultX: 1588,
    defaultY: 1072,
    src: artwork9,
  },
];
