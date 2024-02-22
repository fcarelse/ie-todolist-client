import { TodoType } from "../../types/Todo/TodoType";
import {
  Box,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Delete, PlusOne } from "@mui/icons-material";
import { TODO_STATUSES } from "../../helper/Constants/Constants";
import { ChangeEvent } from "react";

export const TodoComp = ({
  todo,
  append,
  remove,
  change,
}: {
  todo: TodoType;
  append: any;
  remove: any;
  change: any;
}) => {
  const changedField =
    (field: keyof TodoType) => (changeEvent: ChangeEvent<HTMLInputElement>) => {
      // @ts-ignore
      change(field, changeEvent.target?.value || "");
    };

  const changedSelect =
    (field: keyof TodoType) => (changeEvent: SelectChangeEvent<string>) => {
      // @ts-ignore
      change(field, changeEvent.target?.value || "");
    };

  const cellMargin = "8px";

  return (
    <Box>
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
        onChange={changedSelect("status")}
      >
        {TODO_STATUSES.map((status) => (
          <MenuItem value={status.tag} key={status.tag}>
            {status.label}
          </MenuItem>
        ))}
      </Select>
      <TextField
        sx={{ margin: cellMargin }}
        label="Title"
        variant="outlined"
        title={todo.details}
        value={todo.summary}
        onChange={changedField("summary")}
      />
    </Box>
  );
};
