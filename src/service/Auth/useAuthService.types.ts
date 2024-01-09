export type Credentials = {
  email: string;
  password: string;
};

export type LoginHandlerType = ({
  email,
  password,
}: Credentials) => Promise<boolean>;
