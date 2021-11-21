import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './components/Tabs.jsx';

import Header from './Header.jsx';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <Tabs>
        <div label="All calls">
          Get all <em>calls!!</em>!
        </div>
        <div label="Archived calls">
          Get archived <em>calls!!</em>!
        </div>
        <div> <button> label="archive" </button></div>
      </Tabs>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
