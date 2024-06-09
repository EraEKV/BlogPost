import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  userId: number;
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number[];
  username?: string;
}

const Card: React.FC<{ post: Post }> = ({ post }) => {
  const { title, username, reactions, views } = post;

  return (
    <Link key={post.id} href={`/blogs/${post.id}`} passHref>
      <div className="bg-[#fafafa] rounded-lg shadow-md md:hover:scale-105 cursor-pointer border-x-black">
        <Image
          src="data:image/png;base64,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"
          width={10}
          height={10}
          alt="Blog Post Image"
          className="w-full h-30 rounded-tr-lg rounded-tl-lg"
        />
        <div className="p-4 h-40 flex flex-col justify-between">
          <h3 className="text-base font-bold mb-2">{title}</h3>
          <div className="flex flex-wrap items-center justify-between space-x-1">
            <div className="text-gray-600 flex text-xs items-center space-x-1 mb-2 transition duration-100 ease-in-out hover:text-rose-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
              <span>{reactions.likes}</span>
            </div>
            <div className="text-gray-600 flex text-xs items-center space-x-1 mb-2 transition duration-100 ease-in-out hover:text-emerald-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              <span>{views.length}</span>
            </div>
            {username && (
              <div className="text-gray-600 flex text-xs items-center space-x-1 mb-2 transition duration-100 ease-in-out hover:text-cyan-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <span>{username}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
