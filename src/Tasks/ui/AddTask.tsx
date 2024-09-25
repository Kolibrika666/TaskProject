import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { TaskApi } from "../api/TasksApi";
import { ITaskPost } from "../models";
import { useActionCreators} from "../../store";
import { tasksSlice } from "../slice/tasksSlice";

export interface ITaskForm {
  name: string;
  description: string;
}

const AddTask = () => {
  const setChange = useActionCreators(tasksSlice.actions).setChange;

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors, isValid },
  } = useForm<ITaskForm>();

  const onSubmit: SubmitHandler<ITaskForm> = (data) => {
    const createTask: ITaskPost = {
      name: data.name,
      description: data.description,
      status: "Не выполнено",
    };
    TaskApi.postTask(createTask)
      .then((res) => {
        console.log(res);
      })
      .finally(() => {
        setChange(1);
        reset({
          name: "",
          description: "",
        })
      });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3">
        <Form.Label>Краткое название</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          {...register("name", {
            required: "Поле обязательно к заполнению",
            minLength: {
              value: 3,
              message: "Минимум 3 символа",
            },
            maxLength: {
              value: 30,
              message: "Ой, как-то слишком длинно",
            },
            onChange: () => trigger("name"),
          })}
        />
        {errors?.name && <Form.Text>{errors?.name?.message}</Form.Text>}
      </Form.Group>
      <Form.Group>
        <Form.Label>Подробное описание</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          type="text"
          placeholder=""
          {...register("description", {
            minLength: {
              value: 7,
              message: "Минимум 7 символов",
            },
            onChange: () => trigger("description"),
          })}
        />
        {errors?.description && (
          <Form.Text>{errors?.description?.message}</Form.Text>
        )}
      </Form.Group>
      <Modal.Footer>
        <Button variant={!isValid ? "secondary" : "primary"} type="submit">
          Записать
        </Button>
      </Modal.Footer>
    </Form>
  );
};

export default AddTask;
