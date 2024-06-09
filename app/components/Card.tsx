import Link from "next/link"
import React from "react";



const Card: React.FC<{ post: Post }> = ({ post }) => {
  const { title, username, reactions, views } = post;
  return (
    <Link key={post.id} href={`blogs/${post.id}`} className="">
      <div className="bg-[#fafafa] rounded-lg shadow-md md:hover:scale-105 cursor-pointer border-x-black">
        <img
          // src="https://i.pinimg.com/originals/cc/0a/e4/cc0ae483b7f9f4704a3e9110617366e2.jpg"
          src="https://i.pinimg.com/originals/b4/92/b8/b492b8bcafce4b12f8b925ac4136bc7c.jpg"
          alt="Blog Post Image"
          className="w-full h-30 rounded-tr-lg rounded-tl-lg"
        />
        <div className="p-4 h-40 flex flex-col justify-between">
          <h3 className="text-base font-bold mb-2"> {title} </h3>
          <div className="flex flex-wrap items-center justify-between space-x-1">
            <div className="text-gray-600 flex text-xs items-center space-x-1 mb-2 transition duration-100 ease-in-out hover:text-rose-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
              <span> {reactions.likes} </span>
            </div>
            <div className="text-gray-600 flex text-xs items-center space-x-1 mb-2 transition duration-100 ease-in-out hover:text-emerald-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              <span> {views} </span>
            </div>
            <div className="text-gray-600 flex text-xs items-center space-x-1 mb-2 transition duration-100 ease-in-out hover:text-cyan-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              <span> {username} </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card