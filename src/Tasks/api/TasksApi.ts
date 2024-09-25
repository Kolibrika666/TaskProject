import { httpClient } from "../../httpClient";
import { IDataTasks, IFilterTasks, ITask, ITaskPost, ITaskUpdate } from "../models";

const endpoints = {
  GET: `https://cms.laurence.host/api/tasks`,
  POST: `https://cms.laurence.host/api/tasks/post`,
  DELETE: `https://cms.laurence.host/api/tasks/delete`,
  PUT: `https://cms.laurence.host/api/tasks/put`,
};
export class TaskApi {
  static getList(params?: IFilterTasks) {
    return httpClient.get<IDataTasks<ITask>>(endpoints.GET, { params });
  }
  static postTask(data?: ITaskPost) {
    return httpClient.post<ITask>(endpoints.POST, data);
  }
  static deleteTask( id: number) {
    return httpClient.delete<ITask>(endpoints.DELETE, { params: { id } });
    
  }
  static putTask( id: number, data: ITaskUpdate) {
    return httpClient.put<ITask>(endpoints.PUT, data, { params: { taskId: id} });
  }
}
