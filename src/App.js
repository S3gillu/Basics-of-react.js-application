import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {

  state = {
    persons: [
      { name: 'Shubham', age: 23 },
      { name: 'Saurabh', age: 28 },
      { name: 'Mayank', age: 31 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: 'Saurabh', age: 28 },
        { name: 'Mayank', age: 50 }
      ]
    })

  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Shubham', age: 23 },
        { name: event.target.value, age: 28 },
        { name: 'Mayank', age: 31 }
      ]
    })

  }

  render() {
    
    const style1={
      color :'orangered'
    }

    return (
      <div className="jumbotron">
      <div className="App">
        <h1 style={style1}> Hi, I am a react application </h1>
        <p style={style1}> This is really working </p>

        <button  type="button" className="btn btn-success"
        onClick={this.switchNameHandler.bind(this, 'S3')}
        >Switch Name</button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={() => this.switchNameHandler('Singh')}
        >My Hobbies : Racing </Person>

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler}
        > My Hobbies : Trekking </Person>

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        > My Hobbies : Sleeping </Person>

      </div>
      </div>
    );
  }
}

export default App;
