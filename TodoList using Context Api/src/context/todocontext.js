import { useContext, createContext } from "react";

export const TodoContext = createContext({

    todos:[{
        id: 1,
        todo: "todo msg",
        completed: false,
    }
],
addtodo: (todo)=>{},
updatedTodo: (id, todo) =>{},
deletetodo: (id) =>{},
togglecompleted: (id)=>{}
})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
