import React, { ChangeEvent, MouseEventHandler } from "react";
import { TodoType } from "../../types/Todo/TodoType";
import {
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Delete, PlusOne } from "@mui/icons-material";
import { TODO_STATUSES } from "../../helper/Constants/Constants";

export const TodoComp = ({
  todo,
  append,
  remove,
  update,
}: {
  todo: TodoType;
  append: any;
  remove: any;
  update: any;
}) => {
  const changedField =
    (field: keyof TodoType) => (changeEvent: ChangeEvent<HTMLInputElement>) => {
      // @ts-ignore
      book.change(book.index, field, changeEvent.target?.value || "");
    };

  const changedStatus =
    (field: keyof TodoType) => (changeEvent: SelectChangeEvent<string>) => {
      // @ts-ignore
      book.change(book.index, field, changeEvent.target?.value || "");
    };

  const cellMargin = "8px";

  return (
    <>
      <Button onClick={() => append()}>
        <PlusOne />
      </Button>
      <Button onClick={() => remove()}>
        <Delete />
      </Button>

      <Select
        sx={{ margin: cellMargin, width: "150px" }}
        title="Status"
        label="Status"
        value={todo.status}
        onChange={changedStatus("status")}
      >
        {TODO_STATUSES.map((status) => (
          <MenuItem value={status.tag} key={status.tag}>
            {status.label}
          </MenuItem>
        ))}
      </Select>
      {todo.status}
      <TextField></TextField>
      {todo.text}
    </>
  );
};
