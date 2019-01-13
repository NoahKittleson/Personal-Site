import React, { Component } from 'react';
// import logo from './logo.svg';
import codeImg from './Images/Code.png'
import artImg from './Images/Guernica6.png'
import gameImg from './Images/Screenshot3.png'
import reclineImg from './Images/RecliningMan.png'
import wordsImg from './Images/words-img.png'
import EaselImg from './Images/Art Easel.png'
import GatstonPdf from './Writing/The Mysterious Case of Bill Gatston.pdf'
import BriePdf from './Writing/It\'s an Acquired Taste.pdf'


import './App.css';

class NavLinks extends React.Component {
	render() {
		return <div id={this.props.class} className="nav-box">
			<button className="fake-link" onClick={() => this.props.callback(this.props.index)}> {this.props.text} </button>
		</div>
	}
}

class LandingPage extends React.Component {
	render() {
	  return <div id="landing">
		  <h1> Hi, I'm <br/> <span className="my-zone"> Noah Kittleson. </span> </h1>
		  <p>Click on any of the corners to learn more .</p>
    </div>
	}
}

class CodePage extends React.Component {
	render() {
		return <div className="body" id="code">
			<div className="grid-container outline">
				<div className= "row">
					<div className="col-2 topic-img">
						<img src={codeImg} alt="The code for this webpage."/>
					</div>
					<div className="col-3">
						<h2 className="heading">About My Code:</h2>
						<p className="center-text">I am a Junior Web and Software Developer living in Portland, Oregon.  In 2014, I started by teaching myself 
						programming in C++.  In 2016 I enrolled in <a href="https://www.epicodus.com/">Epicodus</a>.  I specialize in Object Oriented Programming, 
						but no matter the language, I just want to make things.  If you want to pay me to make things,  
						<a href = "mailto:noahkittleson@gmail.com?subject=Make%20me%20a%20thing"> you can</a>.  If you want an idea of what I can do, check out my 
						<a href="https://www.github.com/noahkittleson" target="_blank" rel="noopener noreferrer" className="App-link"> GitHub</a> (or the rest of this site).</p>
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
							<a href="https://www.github.com/noahkittleson" target="_blank" rel="noopener noreferrer" className="App-link">My GitHub</a>
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
			<div className="grid-container outline">
				<div className= "row">
					<div className="col-2 topic-img">
						<img src={artImg} alt="Pixel art Guernica"  className="img-border"/>
						<p className= "disclaimer">Pixel Guernica</p>
					</div>
					<div className="col-3">
						<h2 className="heading">About My Art:</h2>
						<p className="center-text">I started doing pixel art in 2017, mainly because I was not good at traditional art and
							hoped that I could hide it behind a mandatory low resolution.  I don't feel like I've gotten significantly better at art, but I
							<i>do</i> feel that I've gotten better at hiding the fact that I'm bad at art.  Is that the same thing?</p>
					</div>
					<div className="col-1" id="codeLangs">
						<img src={EaselImg} alt="An art Easel"/>
						<div id="github-link">
							<a href="https://www.deviantart.com/noahkittleson" target="_blank" rel="noopener noreferrer" className="App-link">My Art Portfolio</a>
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
			<div className="grid-container outline">
				<div className= "row">
					<div className="col-2 topic-img">
						<img src={gameImg} alt="Screenshot of my game." className="img-border" />
					</div>
					<div className="col-3">
						<h2 className="heading">About My Game:</h2>
						<p className="center-text">I'm building a video game.  What's it about?  I'm not sure yet.  But I do know it'll be a turn-based RPG, 
						and that it'll be story focused. Right now I'm building out the engine and trying to get all the various systems in place.  The audio, 
						the battle systems, the dialogue trees, all that.  I've spent the last four years building the engine, now that I'm almost done I 
						don't even know what to put in it.  Go figure, huh?</p>
					</div>
					<div className="col-1" id="codeLangs">
						<img src={reclineImg} alt="just a relaxed dude" className="test"/>
						<div id="game-link">
							<b><a href="https://github.com/noahkittleson/RPG-engine" target="_blank" rel="noopener noreferrer" className="App-link">My Game</a></b>
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
			<div className="grid-container outline">
				<div className= "row">
					<div className="col-2 topic-img">
						<img src={wordsImg} alt="the creative process" className="img-border"/>
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
							<a href={BriePdf} target="_blank" rel="noopener noreferrer" className="App-link">It's an Acquired Taste</a>
						</div>
						<br/>
						<div className="story-link">
							<a href={GatstonPdf} target="_blank" rel="noopener noreferrer" className="App-link">The Mysterious Case of Bill Gatston - Part 1</a>
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
			console.log("body changed: " + number);
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
