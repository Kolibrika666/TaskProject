import { FormOption } from "./shared";

export interface IFilterTasks {
    id: number,
    attributes: {
        status?: string,
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
        status?: string,
        favorite?: boolean,
    },
}

export interface ITaskPost {
    data: {
      name: string,
      description: string,
      status?: string
    }
  }

  export const selectOption: FormOption<string>[] =
  [
    {
        value: "все",
        label: "все",
    },
    {
        value: "Выполненные",
        label: "Выполненные",
    },
    {
        value: "Не выполненные",
        label: "Не выполненные",
    },
  ];