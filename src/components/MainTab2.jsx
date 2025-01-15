import  { useEffect, useState } from 'react'
import MainTabCard from './MainTabCard'

export const MainTab2 = () => {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);
    return (
        <main className='bg-gray-100 w-full dark:bg-dim  dark:text-gray-200'>
            <div className='flex flex-col flex-shrink flex-grow-0 bg-white dark:bg-extra dark:text-gray-200'>
                <div className='flex mb-4 mt-5  justify-between items-center  dark:bg-extra dark:text-gray-200 '>
                    <div className='text-gray-600 hidden md:flex gap-2 mt-1 pr-8'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="w-5 h-5 "><path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="w-5 h-5"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
                        <a href="">Services</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="w-5 h-5"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
                        <a href="">AI Chat</a>
                    </div>
                    <div className='flex gap-2 pr-4'>
                        <button  onClick={() => setDarkMode(!darkMode)} className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 w-10 ml-3 md:ml-auto z-50" type="button" id="radix-:r1b:" aria-haspopup="menu" aria-expanded="false" data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg><span className="sr-only">Toggle theme</span></button>
                        <div>
                            <img className='object-contain h-10 w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_qPxvIYP1FbJzATzWtrRCFXdziuJbq6Q8A&s" alt="" />
                        </div>
                        <div className='flex column justify-center items-center'> <span className='text-sm'> Alpas Shrivastava </span> </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4 w-full sticky top-0 bg-card z-10 py-4  dark:text-white dark:bg-dim">
                <div className="lg:ml-2 w-full lg:w-auto">
                    <div className="min-w-[300px]">
                        <div className="relative mt-1 w-full">
                            <button className="relative w-full cursor-default rounded-lg bg-white/5 py-2 pl-3 pr-10 text-left shadow-md  ring-1 ring-inset ring-white/10 focus:outline-none  focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm" id="headlessui-listbox-button-:r2f:" type="button" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="">
                                <span className="block truncate ">GPT-4o (Omni)</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-gray-400"><path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd"></path></svg></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="ml-auto"><div className="hidden lg:flex gap-2 mr-3">
                    <button type="button" className="bg-white px-4 py-3 rounded-sm dark:text-gray-200 dark:bg-extra"><div className="flex justify-between gap-2 items-center w-full text-sm  "><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="w-5 h-5 "><path d="M200,80v32a8,8,0,0,1-16,0V88H160a8,8,0,0,1,0-16h32A8,8,0,0,1,200,80ZM96,168H72V144a8,8,0,0,0-16,0v32a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path></svg>Fullscreen</div></button>

                    <button type="button" className="bg-white px-4 py-3 rounded-sm dark:text-gray-200 dark:bg-extra">
                        <div className="flex justify-between gap-2 items-center w-full text-sm  "><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="w-5 h-5 "><path d="M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L204.69,112H165a88,88,0,0,0-85.23,66,8,8,0,0,1-15.5-4A103.94,103.94,0,0,1,165,96h39.71L170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66ZM192,208H40V88a8,8,0,0,0-16,0V208a16,16,0,0,0,16,16H192a8,8,0,0,0,0-16Z"></path></svg>Share</div></button>
                </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 ml-auto mr-4 md:py-2  dark:bg-dim  dark:text-gray-200  space-y-4 pt-8"><span className="ml-2">Get started</span>
                <MainTabCard />
                <MainTabCard />
                <MainTabCard />
                <MainTabCard />
            </div>
            <div className='flex outline-none w-full relative dark:bg-dim dark:text-gray-200'>
                <div className='absolute top-5 left-8'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer"><path fillRule="evenodd" clipRule="evenodd" d="M9 7C9 4.23858 11.2386 2 14 2C16.7614 2 19 4.23858 19 7V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9C5 8.44772 5.44772 8 6 8C6.55228 8 7 8.44772 7 9V15C7 17.7614 9.23858 20 12 20C14.7614 20 17 17.7614 17 15V7C17 5.34315 15.6569 4 14 4C12.3431 4 11 5.34315 11 7V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V9C13 8.44772 13.4477 8 14 8C14.5523 8 15 8.44772 15 9V15C15 16.6569 13.6569 18 12 18C10.3431 18 9 16.6569 9 15V7Z" fill="currentColor"></path></svg>
                </div>
                <textarea name="" rows={3} style={{ width: "96%" }} className=' dark:text-gray-200  dark:bg-dim resize-none ml-6 w-full block m-3 px-10 outline outline-offset-2 outline-2 py-3 bg-gray-100  rounded focus:outline-green-500' placeholder='Ask GPT-4o (Omni)' id="">
                </textarea>
                <div className='w-14 text-black bg-gray-300 p-2 pl-4 flex justify-between rounded-md mb-2 absolute right-12 top-8'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </div>
            </div>

            <p className="text-zinc-500 pt-4 text-center text-sm">Large Language Models (LLMs) may produce inaccurate information about people, places, or facts.</p>
            <div className="flex flex-col mt-4 items-center"></div>
            <div className=" bg-white dark:bg-extra pr-8  dark:text-gray-200 flex justify-between flex-shrink flex-grow-0 py-2 px-4 text-gray-600 mt-auto  flex-wrap gap-y-2 sm:gap-y-0"><div title="1.0.1">Version 1.0.1</div><div className="flex gap-4"><a href="https://backplain.com/privacy-policy" target="_blank">Privacy Policy</a><a href="https://backplain.com/terms-of-service" target="_blank">Terms of Service</a><button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1f:" data-state="closed">Patch Notes</button></div><div>© Copyright Backplain Inc. 2024</div></div>
        </main>
    )
}
