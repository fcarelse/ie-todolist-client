export class FetchError extends Error {
  status: number = 0;
  constructor(message: string, status: number) {
    super();
    this.message = message;
    this.status = status;
  }
}
