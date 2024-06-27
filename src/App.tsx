// src/App.tsx
import React from 'react';
import CodeEditor from './components/CodeEditor';

const App: React.FC = () => {
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <h1>Simple Code Editor</h1>
      <h3>With Highlightling for jsx and tsx</h3>
      <CodeEditor />
    </div>
  );
};

export default App;
