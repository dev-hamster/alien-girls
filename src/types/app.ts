enum AppEnum {
  Internet = 1,
  Memo,
  MyComputer,
  MyMusic,
  MyEarth,
  Sound,
  Doc,
  A1,
  L2,
  I3,
  E4,
  N5,
  G6,
  I7,
  R8,
  L9,
  S10,
}

interface AppT {
  id: number;
  name: string;
  src: string;
}

export { AppEnum };
export type { AppT };
