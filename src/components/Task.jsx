import React from 'react'

const Task = ({task,del,comp}) => {
    console.log(task)
  return (
    <div>
        <h3 className={task.isDone ? "done":""} > {task.task} </h3>
        <button  onClick={()=>comp(task.id)} > {task.isDone ? "Undo":"complete"} </button>
        <button  onClick={()=>del(task.id)} >Delete</button>
    </div>
  )
}

export default Task