import { FormOption } from "./shared";

export interface IFilterTasks {
    id?: number,
    attributes?: {
        status: string,
        favorite?: boolean,
    },
}

export interface IDataTasks<T> {
    data: T[];
    meta: {
        pagination: {
            page: number,
            pageSize: number,
            pageCount: number,
            total: number,
        }
    }
}

export interface ITask {
    id: number,
    attributes: {
        name: string,
        description: string,
        status: string,
        favorite?: boolean,
    },
}

export interface ITaskPost {
      name: string,
      description: string,
      status: string
  }

  export interface ITaskUpdate {
    name?: string,
    description?: string,
    status: string
}


  export const selectOption: FormOption<string>[] =
  [
    {
        value: "",
        label: "Все",
    },
    {
        value: "Выполнено",
        label: "Выполненные",
    },
    {
        value: "Не выполнено",
        label: "Не выполненные",
    },
  ];