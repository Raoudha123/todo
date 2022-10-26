import React, { Component } from 'react'
import "./App.css"
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';


export default class App extends Component {
  state = {
    firstName:'Raoudha',
    counter:0,
    show:true,
    tasks : [
      {id:Math.random(),task:"go shopping",isDone:true},
      {id:Math.random(),task:"study",isDone:false},
    ]
  }

// increment = () => {
//   this.setState({ counter:this.state.counter+1  });
// }

// decrement = () => {
//   this.setState({ counter:this.state.counter-1  });
// }
//  handleShow = () => {
//   this.setState({ show:!this.state.show  });
//  }
// componentDidMount(){
//   // setInterval(() => {
//   //   this.increment()
//   // }, 1000);
// }

handleDelete = (i)=> {
  this.setState({ tasks:this.state.tasks.filter(el=>el.id!==i)  });
}

handleComplete = (i) => {
  this.setState({ tasks:this.state.tasks.map(el=>el.id===i?{...el,isDone:!el.isDone}:el)  });
}

handleAdd = (text) => {
const newTask = {
  id:Math.random(),
  task:text,
  isDone:false
}
this.setState({ tasks:[...this.state.tasks,newTask]  });
}

  render() {
    return (
      <div className='App'>
        {/* <button onClick={()=>this.handleShow()} >  {this.state.show?"hide":"show"}  </button> */}
        {/* {
          this.state.show &&
        <div>
          <h2> hello {this.state.firstName} </h2>
          <h3>counter : {this.state.counter}  </h3>
          <button onClick={()=>this.increment()} >+</button>
          <button   onClick={this.decrement} >-</button>
        </div>
        } */}
        {/* <Exemple test={this.state.firstName} /> */}
        <AddTask add={this.handleAdd} />
        <TodoList del={this.handleDelete}  tasks={this.state.tasks} comp={this.handleComplete} />
      </div>
    )
  }
}
