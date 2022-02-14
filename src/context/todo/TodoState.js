import React, {useReducer} from 'react';
import {TodoContext} from './todoContext';
import {todoReducer} from './todoReducer';

export const TodoState = ({children}) => {
    const ititialState = {
        todos: [{id: '1', title: 'Выучить React Native'}]
    }
    const [state, dispatch] = useReducer(todoReducer, ititialState)

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos
            }}>
            {children}
        </TodoContext.Provider>
    )
}
