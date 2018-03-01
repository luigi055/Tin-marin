// @flow
export type Props = {
  options: [
    {
      __id: String,
      option: String
    }
  ],
  updateState: Function,
  selectedOptions: [
    {
      __id: String,
      option: String
    }
  ]
};

export type State = {
  randomOption: {
    __id: String,
    option: String
  },
  options: [
    {
      __id: String,
      option: String
    }
  ],
  selectedOptions: [
    {
      __id: String,
      option: String
    }
  ]
};

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};