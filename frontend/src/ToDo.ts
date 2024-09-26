import {TodoStatus} from "./TodoStatus.ts";

export type ToDo = {
    id: string,
    description: string,
    status: TodoStatus,
}