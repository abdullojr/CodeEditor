import React, { useEffect, useRef, useState } from 'react';
import Editor from 'react-simple-code-editor';

import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import '../styles/prism-vsc-dark-plus.scss';
import '../styles/editor.scss';
import '../styles/layout.style.scss';


const CodeArea = ({useCode, setUpdateCode}) => {
  const [code, setCode] = useState('');
  const [codeLines ,setCodeLines] = useState(1);
  const EditorRef = useRef();
  useEffect(() => {
    if(!useCode) return;
    setCode(useCode)
    setCodeLines(useCode.split('\n').length);
  },[useCode])

  return (
    <div className='_box'>
      <div className='_counter'>
        {[...Array(codeLines)].map((_, i) => <span key={i}>{i + 1}</span>)}
      </div>

        <div className='window'>
        <div className='editor_wrap'>
          <Editor
          ref={EditorRef}
          autoFocus
          onChange={(e) => {
            setCode(e.target.value);
            setCodeLines(e.target.value.split('\n').length);
            setUpdateCode(e.target.value);
            console.log('Changed!')
          }}
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => highlight(code, languages.js)}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 20
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default CodeArea