import { ResultPromise, ServicePromise } from "./services";

type ServiceAction<T> = (
  state: ResultPromise<T> | null,
  formData: FormData,
) => ServicePromise<T> | Promise<ServicePromise<T>>;

type StateAction<T> = ServicePromise<T> | null;

export type { ServiceAction, StateAction };
