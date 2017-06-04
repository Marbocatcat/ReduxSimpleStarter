import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDZ3ZxE9TK-biNuNzAnyydBuwCN8woJKCw';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
};

ReactDOM.render(<App/>, document.querySelector('.container'));
