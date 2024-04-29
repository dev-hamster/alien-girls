import Window from 'components/Common/Window';
import { useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { appState, defaultAppState } from 'store';
import { AppT } from 'types/app';
import { FlexBox, Layout } from './Music.styled';
const myStyle = require('assets/music/sample.mp3');
const harderBetterFasterStronger = require('assets/music/sample.mp3');
const dameTuCosita = require('assets/music/sample.mp3');
const alien = require('assets/music/sample.mp3');
const englishmanInNewYork = require('assets/music/sample.mp3');
const virtualInsanity = require('assets/music/sample.mp3');

enum AudioID {
  Audio1,
  Audio2,
  Audio3,
  Audio4,
  Audio5,
  Audio6,
}

const LAST = AudioID.Audio6;

function Music(
  appInfoData: AppT & {
    open?: boolean;
    set?: any;
    zIndex?: number;
    defaultX?: number;
    defaultY?: number;
  }
) {
  const setAppState = useSetRecoilState(appState);
  const pointer = useRef(AudioID.Audio1);
  const audioPlay = useRef<NodeJS.Timer>();
  const [audio] = useState<HTMLAudioElement>(
    new Audio(PLAY_LIST.find((audio) => audio.id === pointer.current)?.src)
  );
  const [audioTime, setAuditoTime] = useState<number>();
  const { open: isActive, set: setIsActive, ...appInfo } = appInfoData;

  useEffect(() => {
    if (!isActive) {
      handlePause();
    }
  }, [isActive]);

  const handlePlay = () => {
    if (audio) {
      audio.play();
      audioPlay.current = setInterval(() => {
        const audioTime_ = Math.round(audio.currentTime);
        setAuditoTime(audioTime_);
        const audioLength = Math.round(audio.duration);

        if (audioTime_ === audioLength && pointer.current < LAST) {
          pointer.current += 1;
          switchTreck();
        } else if (audioTime === audioLength && pointer.current === LAST) {
          pointer.current = AudioID.Audio1;
          switchTreck();
        }
      }, 10);
    }
  };

  const handlePause = () => {
    if (audio) {
      audio.pause();
      clearInterval(audioPlay.current);
    }
  };

  const handleNext = () => {
    if (pointer.current === LAST) {
      pointer.current = AudioID.Audio1;
    } else {
      pointer.current += 1;
    }

    switchTreck();
  };

  const handlePrev = () => {
    if (pointer.current === AudioID.Audio1) {
      pointer.current = LAST;
    } else {
      pointer.current -= 1;
    }

    switchTreck();
  };

  const handleChange = (id: AudioID) => {
    pointer.current = id;

    switchTreck();
  };

  const switchTreck = () => {
    if (audio) {
      audio.src = PLAY_LIST[pointer.current].src;
      audio.currentTime = 0;
      handlePlay();
    }
  };

  const playtime = () => {
    let playtimeFormat = '00:00';
    if (audioTime) {
      const strAudioTime = audioTime!.toString();
      if (strAudioTime.length >= 3) {
        playtimeFormat = `0${strAudioTime[0]}:${strAudioTime[1]}${strAudioTime[2]}`;
      } else if (strAudioTime.length === 2) {
        playtimeFormat = `00:${strAudioTime[0]}${strAudioTime[1]}`;
      } else {
        playtimeFormat = `00:0${strAudioTime[0]}`;
      }
    }

    return playtimeFormat;
  };

  const handleClose = () => {
    setIsActive(false);
    setAppState(({ apps }) => ({
      ...defaultAppState,
      apps: apps.filter((app) => app.id !== appInfo.id),
    }));
  };

  return (
    <Window
      {...appInfo}
      open={isActive}
      title={appInfo.name}
      onClose={handleClose}
      style={{ width: 'fit-content' }}
    >
      <Layout>
        <div className='music-control'>
          <div className='time'>
            [{pointer.current + 1}] {playtime()}
          </div>
          <div className='control'>
            <div>
              <button className='play' onClick={handlePlay}></button>
              <button className='stop' onClick={handlePause}></button>
            </div>
            <div>
              <button className='prev' onClick={handlePrev}></button>
              <button className='next' onClick={handleNext}></button>
            </div>
          </div>
        </div>

        <div className='music-info'>
          <FlexBox>
            <p>Artist: </p>
            <select
              value={PLAY_LIST[pointer.current].id}
              onChange={(e) => handleChange(Number(e.target.value))}
            >
              {PLAY_LIST.map(({ id }) => (
                <option key={id} value={id}>
                  {PLAY_LIST[id].artist}
                </option>
              ))}
            </select>
          </FlexBox>
          <FlexBox>
            <p>Title: </p>
            <select
              value={PLAY_LIST[pointer.current].id}
              onChange={(e) => handleChange(Number(e.target.value))}
            >
              {PLAY_LIST.map(({ id }) => (
                <option key={id} value={id}>
                  {PLAY_LIST[id].title}
                </option>
              ))}
            </select>
          </FlexBox>
          <FlexBox>
            <p>Track: </p>
            <select
              value={PLAY_LIST[pointer.current].id}
              onChange={(e) => handleChange(Number(e.target.value))}
            >
              {PLAY_LIST.map(({ id }) => (
                <option key={id} value={id}>
                  {id + 1}
                </option>
              ))}
            </select>
          </FlexBox>
        </div>
      </Layout>
    </Window>
  );
}

export default Music;

const PLAY_LIST = [
  {
    id: AudioID.Audio1,
    title: 'My Style',
    artist: 'Brown Eyed Girls',
    src: myStyle,
  },
  {
    id: AudioID.Audio2,
    title: 'Harder, Better, Faster, Stronger',
    artist: 'Daft Punk',
    src: harderBetterFasterStronger,
  },
  {
    id: AudioID.Audio3,
    title: 'Dame Tu Cosita',
    artist: 'El Chombo',
    src: dameTuCosita,
  },
  {
    id: AudioID.Audio4,
    title: 'Virtual Insanity',
    artist: 'Jamiroquai',
    src: virtualInsanity,
  },
  {
    id: AudioID.Audio5,
    title: 'Englishman In New York',
    artist: 'Sting',
    src: englishmanInNewYork,
  },
  {
    id: AudioID.Audio6,
    title: 'ALIEN',
    artist: 'LEE SUHYUN',
    src: alien,
  },
];
