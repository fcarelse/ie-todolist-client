export type Credentials = { username: string; password: string };

export type LoginHandlerType = ({
  username,
  password,
}: Credentials) => Promise<{ token: string }>;
