type ResultPromise<T> =
  | {
      success: true;
      message: string;
      data?: T | null;
    }
  | {
      success: false;
      message: string;
      error?: any;
    };

type ServicePromise<T> = Promise<ResultPromise<T>>;

export type { ResultPromise, ServicePromise };
