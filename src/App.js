import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const element = <p>This is supposed to be here</p>

function test () {
	return <h1> This is a <i>Header</i> </h1>
}

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

class AnotherTest extends React.Component {
	render() {
		return <h1>Hello {this.props.name}</h1>;
	}
}

class Toggle extends React.Component {
	constructor (props) {
		super(props);
		this.state = {isToggleOn: true };
		//this is necessary to make this a function that can change state of the class
		//unbounded functions are unable to modify the state of the class because JS is dumb and member functions
		//aren't functions that have any connection to the class itself, they more just use it as a namespace.
		//... or you could put handleClick = () => {/definition/}.  Although this seems more explicit.	
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick () {
		this.setState(state => ({
			isToggleOn: !state.isToggleOn
		}));
	}

	render () {
		return <button onClick = {this.handleClick}> 
			{this.state.isToggleOn ? 'YES' : 'NO'}
		</button>
	}
}

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>{listItems}</ul>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {element}
            {test()}
            <AnotherTest name="Noah" />
          </a>
          <Toggle />
        </header>
      </div>
    );
  }
}

export default App;
