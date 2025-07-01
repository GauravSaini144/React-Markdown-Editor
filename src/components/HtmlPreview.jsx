import React from 'react'
import {marked} from "marked"
import DOMPurify from "dompurify"
function HtmlPreview({markdown}) {
  return (
    <>
    
    <div className='mt-0 '>
        <pre className='bg-white   text-black m-0 dark:bg-black dark:text-gray-300'><code >{marked(markdown)}</code></pre>
    </div>
    </>
  )
}

export default HtmlPreview