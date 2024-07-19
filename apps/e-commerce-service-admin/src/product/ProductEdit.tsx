import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="price" source="price" />
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="stock" source="stock" />
      </SimpleForm>
    </Edit>
  );
};
