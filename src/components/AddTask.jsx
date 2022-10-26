import React, { Component } from 'react'

export default class AddTask extends Component {
    
    state = {
        inputValue:""
    }
    handleChange = (e) => {
        this.setState({ inputValue:e.target.value  });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.state.inputValue.length &&
        this.props.add(this.state.inputValue)
        this.setState({ inputValue:""  });
    }

  render() {
    return (
      <div>
        <form  onSubmit={this.handleSubmit} action="">
            <input type="text" value={this.state.inputValue} onChange={(e)=>this.handleChange(e)} />
            <button  type='submit' >Add</button>
        </form>
      </div>
    )
  }
}
