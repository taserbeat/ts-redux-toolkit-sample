import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import { getTasksAsync, selectIsLoading, selectTasks, selectUpdatedAt } from './todoSlice';

export interface Task {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface TodoProps {

}

const Todo: React.FC<TodoProps> = (props) => {
    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks);
    const updatedAt = useSelector(selectUpdatedAt);
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        const bootLoad = async () => {
            await dispatch(getTasksAsync());
        }

        bootLoad();
    }, [dispatch]);

    return (
        <div>
            <Header />

            {updatedAt && (
                <div>
                    <span>{`更新日時: ${updatedAt.toLocaleTimeString()}`}</span>
                    <br />
                </div>
            )}

            {isLoading && (
                <div>
                    <span>更新中...</span>
                    <br />
                </div>
            )}

            <button onClick={() => dispatch(getTasksAsync())}>更新</button>

            <div>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>isDone</th>
                    </tr>
                    {!isLoading && tasks.map((task) => {
                        return (
                            <tr>
                                <td>{task.id}</td>
                                <td>{task.title}</td>
                                <td>{task.completed ? `完了` : `未完了`}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}

export default Todo;
