import React, {useState, useEffect} from 'react'

function ThemeToggle() {
    const [isDark, setIsDark]=useState(true);
    useEffect(()=>{
        const savedTheme=localStorage.getItem('markdownTheme');
        if(savedTheme==="light"){
            document.documentElement.classList.remove('dark');
            setIsDark(false);
        }
        else{
            document.documentElement.classList.add('dark');
            setIsDark(true);
        }
    },[]);

    const toggleTheme=()=>{
        if(isDark){
            document.documentElement.classList.remove('dark');
            localStorage.setItem('markdownTheme', 'light');

        }
        else{
            document.documentElement.classList.add('dark');
            localStorage.setItem('markdownTheme', 'dark');
        }

        setIsDark(!isDark);
    }
  return (
    <>
    <button onClick={toggleTheme} 
    className='w-14  outline-none text-black text-gray-100 dark:text-gray-100'
    >
{
  isDark?<i className="fa-regular fa-sun fa-xl"></i>:<i className="fa-regular fa-moon fa-xl"></i>
}
    </button>
    </>
  )
}

export default ThemeToggle