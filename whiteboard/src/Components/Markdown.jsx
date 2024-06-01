import ReactMarkdown from 'react-markdown';
import { useState } from 'react';

function Markdown() {
    const [markdown, setMarkdown] = useState('# Welcome to Markdown');

    return (
        <div>
            <h1>Markdown Editor</h1>
            <textarea
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                rows={10}
                style={{ width: '100%', marginBottom: '1rem' }}
            />
            <h2>Markdown Preview</h2>
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
}

export default Markdown;
