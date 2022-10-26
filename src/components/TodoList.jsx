import React from 'react'
import Task from './Task'

const TodoList = ({tasks,del,comp}) => {
    console.log(tasks)
  return (
    <div>
        {
            tasks.map(el=>
                <Task comp={comp} del={del} key={el.id} task={el}  />
                )
        }
    </div>
  )
}

export default TodoList