"use client";

import Loading from "@/app/components/layout/Loading";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Error from "@/app/components/layout/Error";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  reactions: number;
  views: number[];
  tags: string[];
  username?: string;
}





const Blog = () => {
  const { blogId } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get<Post>(`https://dummyjson.com/posts/${blogId}`);
        let postData = response.data;
        const userResponse = await axios.get(`https://dummyjson.com/users/${postData.userId}`);
        const username = userResponse.data.username;
        postData = { ...postData, username };
        setPost(postData);
        setLoading(false);
      } catch (error: any) {
        setError(error.message || 'An error occurred');
        setLoading(false);
      }
    };

    if (blogId) {
      fetchPost();
    }
  }, [blogId]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (!post) {
    setLoading(false)
    return (
      <div className="container mx-auto px-4 py-6">
          <div className="text-center text-xl text-red-500">Post not found</div>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-6 mx-auto w-[80%] min-h-screen sm:max-w-[400px] lg:max-w-[500px] mt-6 sm:mt-10 md:mt-14 lg:mt-16">
      <article className="prose prose-gray mx-auto">
        <div className="space-y-4 not-prose">
          <h1 className="text-2xl font-extrabold tracking-tight lg:text-3xl mb-4 sm:mb-10">
            {post.title}
          </h1>

          {/* <img
            src="https://i.pinimg.com/originals/cc/0a/e4/cc0ae483b7f9f4704a3e9110617366e2.jpg"
            alt="Blog Post Image"
            className="w-full h-30 rounded-lg rounded-tl-lg mb-1"
          /> */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
            className=" h-24 w-24 mx-auto rounded-lg rounded-tl-lg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
          </svg>
          {/* className="w-full h-30 rounded-lg rounded-tl-lg mb-1" */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="w-full h-30 rounded-lg rounded-tl-lg mb-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
          </svg> */}


          <div className="flex items-center gap-3 text-gray-700 mx-auto justify-between">
            
            {/* <span>•</span>
            <span>May 15, 2023</span> */}
            {/* <span>•</span> */}
            <div className="text-gray-600 flex items-center gap-0 space-x-1 mb-2 text-sm sm:text-base transition duration-100 ease-in-out cursor-pointer hover:text-rose-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <span>{post.reactions.likes}</span>
            </div>
            {/* <span>•</span> */}
            <div className="text-gray-600 flex items-center gap-0 space-x-1 mb-2 text-sm sm:text-base transition duration-100 ease-in-out cursor-pointer hover:text-emerald-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <span> {post.views} </span>
            </div>
            <div className="text-gray-600 flex items-center gap-0 space-x-1 mb-2 text-sm sm:text-base transition duration-100 ease-in-out cursor-pointer hover:text-cyan-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <span>{post.username}</span>
            </div>
          </div>
        </div>
        
        <p className="border-t-2 border-gray-300 pt-4 pb-4 sm:pt-6">
          {post.body}
        </p>

        <div className="flex flex-wrap gap-3">
          {post.tags.map((tag, index) => (
            <div
              key={index}
              className="inline-block rounded-lg bg-gray-200 px-3 py-2 text-base cursor-pointer hover:text-white hover:bg-black transition duration-300 ease-in-out"
            >
              {tag}
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}

export default Blog