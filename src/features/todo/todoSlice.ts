import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import axios from 'axios';
import { Task } from './Todo';

interface TodoState {
    tasks: Task[];
    updatedAt: Date | null;
    isLoading: boolean;
}

const initialState: TodoState = {
    tasks: [],
    updatedAt: null,
    isLoading: false,
}

export const getTasksAsync = createAsyncThunk("todo/getTasks", async () => {
    const response = await axios.get<Task[]>("https://jsonplaceholder.typicode.com/todos");
    return response.data;
})

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            getTasksAsync.pending,
            (state) => {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        );

        builder.addCase(
            getTasksAsync.fulfilled,
            (state, action) => {
                return {
                    ...state,
                    isLoading: false,
                    tasks: action.payload,
                    updatedAt: new Date(),
                };
            }
        );

        builder.addCase(
            getTasksAsync.rejected,
            (state) => {
                return {
                    ...state,
                    isLoading: false,
                    updatedAt: new Date(),
                }
            }
        )
    }
});

export default todoSlice.reducer;

export const selectTasks = (state: RootState) => state.todo.tasks;
export const selectUpdatedAt = (state: RootState) => state.todo.updatedAt;
export const selectIsLoading = (state: RootState) => state.todo.isLoading;