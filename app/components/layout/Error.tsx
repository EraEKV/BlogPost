import React from 'react'

const Error = () => {
return (
    <div className="flex min-h-screen w-[90%] flex-col items-center justify-center gap-4 mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10 text-rose-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>

        <h1 className="text-3xl font-bold text-rose-500">Oops, something went wrong</h1>
        <p className="text-emerald-500">
        We're sorry, but an unexpected error has occurred. Please try again later or contact support if the issue
        persists.
        </p>
    </div>
    )
}

export default Error