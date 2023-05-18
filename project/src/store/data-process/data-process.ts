import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Quest } from '../../types/data';

type DataProcess = {
  quest: Quest | null;
}

const initialState: DataProcess = {
  quest: null,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase()
  },
});
