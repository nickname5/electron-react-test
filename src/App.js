import React from 'react';
import logo from './logo.svg';
import './App.css';
import Service from './service';

function App() {
  const [content, setContent] = React.useState([]);
  const [joke, setJoke] = React.useState(null);

  React.useEffect(() => {
    console.log('useEffect callback called!');
    Service.getCategories()
      .then((response) => {
        if (response.categories) {
          setContent(response.categories);
        }
      })
  }, []);

  const catClick = (cat) => () => {
    Service.getJoke(cat)
      .then((response) => {
        console.log('joke: ', response);
        if (response.joke) {
          setJoke(response.joke);
        }
      })
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          { content.length > 0 ? content.map((item, i) => {
            return (
              <button key={ item } onClick={ catClick(item) }>
                { item }
              </button>
            );
          }) : (
            <span>No content</span>
          ) }
        </div>
      </header>
      <article>
        { joke ? joke : 'No joke...' }
      </article>
    </div>
  );
}

export default App;
