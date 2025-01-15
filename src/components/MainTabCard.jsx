// eslint-disable-next-line no-unused-vars
import React from 'react'

function MainTabCard() {
    return (
        <main>
            <div className='flex ml-1 justify-center items-center bg-gray-100 border border-gray-200 rounded-lg hover:bg-white  dark:border-gray-700  dark:text-white dark:bg-dim p-3 mt-1 dark:hover:bg-extra'>
                <span>As a Software Engineer, propose a strategy to improve code quality and reduce bugs in a large-scale software project.</span>
                <div className='w-14 text-black  bg-green-200 hover:bg-green-500 p-2 flex justify-between rounded-md mb-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </div>
            </div>
        </main>
    )
}

export default MainTabCard