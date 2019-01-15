export interface Koma {
  label: string;
  score: number;
}

export class KomaModel implements Koma {
  constructor(private _label: string, private _score: number) {}

  get label() {
    return this._label;
  }

  get score() {
    return this._score;
  }

  static findByLabel(label: string): KomaModel | undefined {
    return KomaList.find(k => k.label === label);
  }

  static typeName: string = "Koma";
}

export const KomaList = [
  new KomaModel("王", 50),
  new KomaModel("飛", 40),
  new KomaModel("角", 40),
  new KomaModel("金", 30),
  new KomaModel("銀", 30),
  new KomaModel("馬", 20),
  new KomaModel("香", 20),
  new KomaModel("し", 10)
];
