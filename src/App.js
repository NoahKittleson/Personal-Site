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

class NavLinks extends React.Component {
	render() {
		return <div id={this.props.class} className="nav-box">
		<h1>
			<a className="link" href="#" onClick={() => this.props.callback(this.props.index)}> {this.props.text} </a>
			</h1>
		</div>
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

class LandingPage extends React.Component {
	render() {
		  return <div className="body">
			  <h2> I am Noah Kittleson. </h2>
	          <p> You are now in <br/> <span className="my-zone">MY ZONE</span></p>

	          <a
	            className="App-link"
	            href="https://reactjs.org"
	            target="_blank"
	            rel="noopener noreferrer" >
	          </a>
	          <Toggle />
          </div>
	}
}

class CodePage extends React.Component {
	render() {
		return <p>This is the Code Page</p>
	}
}

class ArtPage extends React.Component {
	render() {
		return <p>This is the Art Page</p>
	}
}

class GamePage extends React.Component {
	render() {
		return <p>This is the Game Page</p>
	}
}

class WordPage extends React.Component {
	render() {
		return <p>This is the Words Page</p>
	}
}

const pages = [<LandingPage />, <CodePage />, <ArtPage />, <GamePage />, <WordPage />];
const pageItems = pages.map((page) =>
  <div key={page.id}> {page} </div>
);

class App extends Component {
  constructor (props) {
	  super(props);
	  this.state = {index: 0 };
	  this.changePage = this.changePage.bind(this);
  }

	 changePage(number) {
  		this.setState(state => ({
				index: number
			}));
			console.log("called with value: " + number);
  	}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {pages[this.state.index]}
          <NavLinks text="CODE" class="top-left" index={1} callback={this.changePage}/>
          <NavLinks text="ART" class="top-right" index={2} callback={this.changePage}/>
          <NavLinks text="GAMES" class="bottom-left" index={3} callback={this.changePage}/>
          <NavLinks text="WORDS" class="bottom-right" index={4} callback={this.changePage}/>
        </header>
      </div>
    );
  }
}

export default App;
