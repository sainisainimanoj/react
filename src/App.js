// import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
  // return (
    // <div className="App">
      // <header className="App-header">
        // <img src={logo} className="App-logo" alt="logo" />
        // <p>
          // Edit <code>src/App.js</code> and save to reload.
        // </p>
        // <a
          // className="App-link"
          // href="https://reactjs.org"
          // target="_blank"
          // rel="noopener noreferrer"
        // >
          // Learn React
        // </a>
      // </header>
    // </div>
  // );
  // return null;
  const greeting = "greeting";
  const displayEmojiName = event => (alert(event.target.id));
  const emojis = [
	  {		
		  emoji: '😀',
		  name: "grinning face",
	  },
	  {
		  emoji: '🎉',
		  name:"party popper"		 
	  },
	  {
		  emoji:'💃',
		  name:"woman dancing"
	  }
  ];

  // return (		
		// <div className="container">
			// <h1 id={greeting}>Hello, World!</h1>
			// <p> I am writing JSX</p>
		// <ul>
			// <li>
				// <button onClick = {displayEmojiName} >
				  // <span role="img" aria-label="grinning face" id="grinning face">😀</span>
				// </button>
			// </li>
			// <li>
			  // <button onClick={displayEmojiName}>
				  // <span role="img" aria-label="party popper" id="party popper">🎉</span>
			  // </button>
			// </li>
			// <li>
			  // <button onClick={displayEmojiName }>
				  // <span role="img" aria-label="woman dancing" id="woman dancing">💃</span>
			  // </button>
			// </li>
		// </ul>
		// </div>		 
	// )
  const displayName = false;
  return (		
			<div className="container">
				<h1 id={greeting}>Hello, World!</h1>
				<p> I am writing JSX</p>	
				{displayName && <p>I am writing JSX</p>}
				<ul> 
				{
					emojis.map(emoji => (
						<li key={emoji.name}>
							<button onClick={displayEmojiName}>
								<span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
							</button>
						</li>
					) )
				}
				</ul>
			</div>		 
		)
}		


export default App;
