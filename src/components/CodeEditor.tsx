// src/components/CodeEditor.tsx
import React, { useState, useEffect } from 'react';
import Prism, { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism.css'; // Include a Prism theme
import './CodeEditor.css';

const CodeEditor: React.FC = () => {
    const [code, setCode] = useState<string>('');

    useEffect(() => {
        // Highlight code whenever it changes
        Prism.highlightAll();
    }, [code]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCode(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = e.currentTarget.selectionStart;
            const end = e.currentTarget.selectionEnd;
            const newCode = code.substring(0, start) + '  ' + code.substring(end);
            setCode(newCode);
            setTimeout(() => {
                e.currentTarget.selectionStart = e.currentTarget.selectionEnd = start + 2;
            }, 0);
        }
    };

    return (
        <div className="code-editor-container">
            <pre className="code-editor-output" aria-hidden="true">
                <code
                    className="language-jsx"
                    dangerouslySetInnerHTML={{
                        __html: highlight(code, languages.jsx, 'jsx'),
                    }}
                ></code>
            </pre>
            <textarea
                className="code-editor-input"
                value={code}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                spellCheck="false"
            />
        </div>
    );
};

export default CodeEditor;
