import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

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
	  return <div id="landing">
		  <h2> I am Noah Kittleson. </h2>
      <p> You are now in <br/> <span className="my-zone">MY ZONE</span></p>
      <Toggle />
    </div>
	}
}

class CodePage extends React.Component {
	render() {
		return <div className="body" id="code">
			<p>I am a Junior Web and Software Developer living in Portland, Oregon.  In 2014, I started by teaching myself 
			programming in C++, and in 2016 I enrolled in <a href="https://www.epicodus.com/">Epicodus</a> to get training 
			in Web Development.  I specialize in Object Oriented Programming, but no matter the language, I just like to 
			make fun things.  Check out my GitHub!</p>
		</div>
	}
}

class ArtPage extends React.Component {
	render() {
		return <div className="body" id="art">
			<p>This is the Art Page</p>
		</div>
	}
}

class GamePage extends React.Component {
	render() {
		return <div className="body" id="games">
			<p>This is the Game Page</p>
		</div>
	}
}

class WordPage extends React.Component {
	render() {
		return <div className="body" id="words">
			<p>This is the Words Page</p>
		</div>
	}
}

const pages = [<LandingPage />, <CodePage />, <ArtPage />, <GamePage />, <WordPage />];
// const pageItems = pages.map((page) =>
//   <div key={page.id}> {page} </div>
// );

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
        <header id="App-header">
          {pages[this.state.index]}
        </header>
        <NavLinks text="CODE" class="top-left" index={1} callback={this.changePage}/>
        <NavLinks text="ART" class="top-right" index={2} callback={this.changePage}/>
        <NavLinks text="GAMES" class="bottom-left" index={3} callback={this.changePage}/>
        <NavLinks text="WORDS" class="bottom-right" index={4} callback={this.changePage}/>
      </div>
    );
  }
}

export default App;
