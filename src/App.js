import React, { Component } from 'react';
// import logo from './logo.svg';
import codeImg from './Images/Code.png'
import artImg from './Images/Guernica6.png'
import gameImg from './Images/Screenshot3.png'
import reclineImg from './Images/RecliningMan.png'
import wordsImg from './Images/words-img.png'
import GatstonPdf from './The Mysterious Case of Bill Gatston.pdf'
import ArtstationLogo from './Images/Artstation.png'

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
		  <h1> Hi, I'm <br/> <span className="my-zone"> Noah Kittleson. </span> </h1>
		  <p>Click on any of the corners to learn more about me</p>
    </div>
	}
}

class CodePage extends React.Component {
	render() {
		return <div className="body" id="code">
			<div class="grid-container outline">
				<div class= "row">
					<div className="col-2 topic-img">
						<img src={codeImg} alt="A picture of the code for this webpage."/>
					</div>
					<div className="col-3">
						<h2 className="heading">About My Code:</h2>
						<p className="center-text">I am a Junior Web and Software Developer living in Portland, Oregon.  In 2014, I started by teaching myself 
						programming in C++, and in 2016 I enrolled in <a href="https://www.epicodus.com/">Epicodus</a> to get training 
						in Web Development.  I specialize in Object Oriented Programming, but no matter the language, I just like to 
						make fun things.  Check out my GitHub!</p>
					</div>
					<div className="col-1" id="codeLangs">
						<h3 className="heading">Languages:</h3>
						<ul>
							<li>C++</li>
							<li>JavaScript</li>
							<li>HTML</li>
							<li>CSS</li>	
							<li>Java</li>
							<li>C#</li>
						</ul>
						<div id="github-link">
							<a href="https://www.github.com/noahkittleson" target="_blank" className="App-link">My GitHub</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}

class ArtPage extends React.Component {
	render() {
		return <div className="body" id="art">
			<div class="grid-container outline">
				<div class= "row">
					<div className="col-2 topic-img">
						<img src={artImg} alt="Pixel art Guernica"  className="img-border"/>
						<p class= "disclaimer">Pixel Guernica</p>
					</div>
					<div className="col-3">
						<h2 className="heading">About My Art:</h2>
						<p className="center-text">I started doing pixel art in 2017, mainly because I was not good at traditional art and
							hoped that I could hide it behind a mandatory low resolution.  All things told, I think that

							Turns out I really liked pixel art, and 
							animation especially.  Plus it's a useful skill to have for an aspiring game developer.</p>
					</div>
					<div className="col-1" id="codeLangs">
						<img src={ArtstationLogo} alt="Artstation Logo"/>
						<div id="github-link">
							<a href="https://www.artstation.com/noahkittleson" target="_blank" className="App-link">My ArtStation</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}

class GamePage extends React.Component {
	render() {
		return <div className="body" id="games">
			<div class="grid-container outline">
				<div class= "row">
					<div className="col-2 topic-img">
						<img src={gameImg} alt="A picture of the code for this webpage." className="img-border" />
					</div>
					<div className="col-3">
						<h2 className="heading">About My Game:</h2>
						<p className="center-text">Ever since I was a kid I've been playing games.  Board games, video games, flash games, tabletop games,
							It didn't matter.  In 2014, after graduating from college, I decided to take the plunge and teach myself 
							programming so that I could finally try my own hand at making video games.  Ever since I've been working on building my
							own turn-based RPG Engine from scratch.</p>
					</div>
					<div className="col-1" id="codeLangs">
						<img src={reclineImg} alt="just a relaxed dude" className="test"/>
						<div id="game-link">
							<b><a href="https://github.com/noahkittleson/RPG-engine" target="_blank" className="App-link">My Game</a></b>
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}

class WordPage extends React.Component {
	render() {
		return <div className="body" id="words">
			<div class="grid-container outline">
				<div class= "row">
					<div className="col-2 topic-img">
						<img src={wordsImg} alt="A picture of the code for this webpage." className="img-border"/>
					</div>
					<div className="col-3">
						<h2 className="heading">About My Words:</h2>
						<p className="center-text">I write short stoires and unfinished segments of long stories. In college my creative writing professor said that he was 
						a "Reluctant Fan" of my writing.  It is my favorite piece of praise I have ever received.  Sometimes I wonder if I would write more often and more 
						diligently if I hadn't already received the most perfect compliment.</p>
					</div>
					<div className="col-1" id="codeLangs">
						<p className="blurb"><b>Here are a couple things I wrote:</b></p>
						<div className="story-link">
							<a href={GatstonPdf} target="_blank" className="App-link">The Mysterious Case of Bill Gatston - Part 1</a>
						</div>
						<br/>
						<div className="story-link">
							<a href={GatstonPdf} target="_blank" className="App-link">Not with a Bang</a>
						</div>
					</div>
				</div>
			</div>
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
