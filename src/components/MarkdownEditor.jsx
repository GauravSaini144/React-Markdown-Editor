import React,{useEffect, useState} from 'react'
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import remarkBreaks from "remark-breaks" 
import "highlight.js/styles/github.css";
import HtmlPreview from './HtmlPreview'
import { marked } from 'marked'
function MarkdownEditor() {
    const [htmlPreview, setHtmlPreview]=useState(false);
    const [mardown, setMarkdown]=useState("# Welcome to mardown editor");
    const [open, setOpen]=useState(false);
    const [runPreview, setRunPreview]=useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
    
    useEffect(()=>{
    const savedMarkdown=localStorage.getItem('markdown-content')||'# Welcome to mardown editor';
    setMarkdown(savedMarkdown);
    },[]);
    useEffect(()=>{
      localStorage.setItem('markdown-content', mardown);
      
    },[mardown]);

    const handleSave=(fileType)=>{
      setOpen(false);
      let blob;
      if(fileType===".md"){
      blob=new Blob([mardown],{type:'text/markdown'});
      }
      else if(fileType===".html"){
        const html = marked(mardown);
       blob = new Blob([html], { type: "text/html" });
      }
      else if(fileType===".txt"){
          blob = new Blob([mardown], { type: "text/plain" });
      }
      if(blob){
      const url=URL.createObjectURL(blob);
      const a=document.createElement('a');
      a.href=url;
      
      a.download=`document${fileType}`;
      a.click();
      URL.revokeObjectURL(url);
      }

    }
    const handlePreview=()=>{
      if(htmlPreview===false){
        setHtmlPreview(true);
      }else{
        setHtmlPreview(false);
      }
    }

    const handleDropdown=()=>{
      if(open===false){
        setOpen(true);
      }
      else{
        setOpen(false);
      }
    }

    const handleRunPreview=()=>{
      if(runPreview===true){
        setRunPreview(false);
      }
      else{
        setRunPreview(true);
      }
    }
  return (
    <>
    
   <div className="h-screen bg-gray-100 flex flex-col md:flex-row gap-6 px-2 md:px-4 py-6 dark:bg-gray-900 dark:text-gray-100">
  
  
{isMobile && runPreview?(<div className="flex flex-col w-full  md:w-1/2 h-full bg-white border rounded-md p-2 md:p-4 overflow-auto prose prose-sm dark:prose-invert   max-w-none dark:bg-black dark:border-none dark:text-gray-400">
   <div className='flex items-center justify-between dark:text-gray-200'> <p className="text-lg font-semibold m-0 text-gray-700 dark:text-gray-400">{htmlPreview?"Html Preview":"Preview"}</p>
   <div className='flex gap-4'> <button onClick={handleRunPreview} className='md:hidden lg:hidden  bg-slate-500 text-gray-100 dark:bg-gray-700 px-4 rounded-md'>Edit</button>
   <button  onClick={handlePreview} className='text-xl transition duration-500' >{htmlPreview?<i className="fa-regular fa-eye"></i>:<i className="fa-solid fa-code"></i>}</button>
    </div></div>
    <hr className='p-0 m-0 mt-1 ' />
    { htmlPreview?<HtmlPreview markdown={mardown} />:
    <ReactMarkdown
      children={mardown}
      rehypePlugins={[rehypeHighlight]}
      remarkPlugins={[remarkGfm, remarkBreaks]}
    />}
  </div>):
  <div className="flex flex-col  w-full md:w-1/2 h-full bg-white border rounded-md p-2 md:p-4 overflow-auto dark:bg-black dark:border-none ">
    <div className='flex justify-between items-center'><p className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-400">Markdown</p> 
   
   <div className='flex gap-4'> <button onClick={handleRunPreview}  className='md:hidden lg:hidden bg-slate-500 text-gray-100 dark:bg-gray-700 px-2 rounded-md'>Output</button>
    <div className='relative '>
      
   <button className='px-2 rounded-md bg-green-600 text-green-100 font-medium  transition ' onClick={handleDropdown}>Export</button>
   {open && <ol className='absolute right-0 mt-1 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md shadow-md text-sm text-gray-800 dark:text-gray-200 w-32  overflow-hidden z-10  '>
    <li className=' p-1 hover:bg-gray-700 cursor-pointer' onClick={()=>handleSave(".md")} >Export as .md</li>
    <li className='p-1 hover:bg-gray-700 cursor-pointer' onClick={()=>handleSave(".txt")} >Export as .txt</li>
    <li className='p-1 hover:bg-gray-700 cursor-pointer' onClick={()=>handleSave(".html")} >Export as .html</li>
   </ol>}
   </div>
</div>
   </div>
    

    <hr />
    <textarea
      className="flex-1 w-full p-3  rounded-md text-sm font-mono resize-none focus:outline-none dark:bg-black dark:text-gray-400"
      value={mardown}
      onChange={(e) => setMarkdown(e.target.value)}
      spellCheck={false}
    />
  </div>

  }

  
  <div className="hidden md:flex flex-col w-full  md:w-1/2 h-full bg-white border rounded-md p-4 overflow-auto prose dark:prose-invert   max-w-none dark:bg-black dark:border-none dark:text-gray-400">
   <div className='flex items-center justify-between dark:text-gray-200'> <p className="text-lg font-semibold m-0 text-gray-700 dark:text-gray-400">{htmlPreview?"Html Preview":"Preview"}</p>
   
   <button  onClick={handlePreview} className='text-xl transition duration-500' >{htmlPreview?<i className="fa-regular fa-eye"></i>:<i className="fa-solid fa-code"></i>}</button>
   </div>
    <hr className='p-0 m-0 mt-1 ' />
    { htmlPreview?<HtmlPreview markdown={mardown} />:
    <ReactMarkdown
      children={mardown}
      rehypePlugins={[rehypeHighlight]}
      remarkPlugins={[remarkGfm, remarkBreaks]}
    />}
  </div>
</div>
    </>
  )
}

export default MarkdownEditor