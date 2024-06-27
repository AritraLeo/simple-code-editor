// src/App.tsx
import React from 'react';
import CodeEditor from './components/CodeEditor';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Simple Code Editor</h1>
      <CodeEditor />
    </div>
  );
};

export default App;
