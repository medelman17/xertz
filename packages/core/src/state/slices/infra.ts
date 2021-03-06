import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { OpsMap } from "../../transformers";
export type InfraJob = {
  op: keyof OpsMap;
  id: string;
  isInterface: boolean;
  isObject: boolean;
  isQuery: boolean;
  isMutation: boolean;
  isList: boolean;
  pk: string;
  sk?: string | undefined;
  fieldName: string;
  returnType: string;
  returnTypeInterface?: string;
};

const infraAdapter = createEntityAdapter<InfraJob>({
  selectId: (input) => input.id,
});

export const infraSlice = createSlice({
  name: "infra",
  initialState: infraAdapter.getInitialState(),
  reducers: {
    add: infraAdapter.addOne,
  },
});

const actions = infraSlice.actions;

export { actions };
