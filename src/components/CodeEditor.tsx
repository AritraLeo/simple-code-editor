// src/components/CodeEditor.tsx
import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx'; // Include additional languages as needed
import './CodeEditor.css'; // Create this file for basic styling

const CodeEditor: React.FC = () => {
    const [code, setCode] = useState<string>('');

    useEffect(() => {
        Prism.highlightAll();
    }, [code]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCode(e.target.value);
    };

    return (
        <div className="code-editor-container">
            <pre className="code-editor-output">
                <code className="language-jsx">{code}</code>
            </pre>
            <textarea
                className="code-editor-input"
                value={code}
                onChange={handleChange}
                spellCheck="false"
            />
        </div>
    );
};

export default CodeEditor;
