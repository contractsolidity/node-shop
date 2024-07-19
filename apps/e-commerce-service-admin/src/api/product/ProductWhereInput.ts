import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  price?: FloatNullableFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  stock?: IntNullableFilter;
};
