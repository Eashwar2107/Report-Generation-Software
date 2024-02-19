// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RollNumberInput from './components/RollNumberInput';
import TestSelection from './components/TestSelection';
import TestScores from './components/TestScores';

function App() {
  const [rollNumber, setRollNumber] = useState('');

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <RollNumberInput setRollNumber={setRollNumber} />
          </Route>
          <Route path="/dashboard">
            <TestSelection rollNumber={rollNumber} />
          </Route>
          <Route path="/scores/:testName">
            <TestScores />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
