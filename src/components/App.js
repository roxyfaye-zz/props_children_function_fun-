import React, { Component } from 'react';
import '../styles/App.css';

import BaseLayout from './BaseLayout';
import Parent from './Parent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>
          <Parent />
        </BaseLayout>

      </div>
    );
  }
}

export default App;
