export type TypeSlider = {
  id: string;
  img: string;
  title: string;
  text: string;
};

export type RegisterType = {
  onchangeText: (name: string, value: string) => void;
  setForm: () => void;
  onSubmit: () => void;
  form: object;
  isLoading: boolean;
  isSecureEntry: boolean;
  setIsSecureEntry: () => void;
};
