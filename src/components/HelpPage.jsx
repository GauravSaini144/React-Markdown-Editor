import React from 'react'

function HelpPage() {
 return (
    <div className="prose max-w-4xl mx-auto p-8 dark:prose-invert dark:bg-gray-800 mt-5">
  <h1>Markdown Syntax Guide</h1>

  <h2>Headings</h2>
  <pre>
    <code>{`# H1
## H2
### H3`}</code>
  </pre>

  <h2>Emphasis</h2>
  <pre>
    <code>{`*italic* or _italic_
**bold** or __bold__
~~strikethrough~~`}</code>
  </pre>

  <h2>Lists</h2>
  <pre>
    <code>{`- Item 1
- Item 2
- Item 3

1. First
2. Second`}</code>
  </pre>

  <h2>Links</h2>
  <pre>
    <code>{`[Website Name](URL)`}</code>
  </pre>

  <h2>Images</h2>
  <pre>
    <code>{`![Alt text](image-url.jpg)`}</code>
  </pre>

  <h2>Inline & Block Code</h2>
  <pre>
    <code>{`\`inline code\`

\`\`\`js
function test() {
  return true;
}
\`\`\``}</code>
  </pre>

  <h2>Blockquote</h2>
  <pre>
    <code>{`> This is a blockquote`}</code>
  </pre>

  <h2>Horizontal Rule</h2>
  <pre>
    <code>{`---`}</code>
  </pre>

  <h2>Tables</h2>
  <pre>
    <code>{`| Syntax | Description |
|--------|-------------|
| Header | Title       |
| Cell   | Data        |`}</code>
  </pre>

  <h2>Task Lists</h2>
  <pre>
    <code>{`- [x] Completed Task
- [ ] Incomplete Task`}</code>
  </pre>

  <h2>Escaping Characters</h2>
  <pre>
    <code>{`\\*not italic\\*
\\# not a heading`}</code>
  </pre>
</div>

  );
}

export default HelpPage