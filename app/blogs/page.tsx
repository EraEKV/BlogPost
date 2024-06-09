"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Card from "../components/Card";
import SideBar from "../components/layout/SideBar";
import Error from "../components/layout/Error";
import Loading from "../components/layout/Loading";

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

interface PostsResponse {
  posts: Post[];
}

const Blogs: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    const fetchPosts = async () => {
      try {
        const response = await axios.get<PostsResponse>('https://dummyjson.com/posts', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const postsData = response.data.posts;

        // Fetch usernames for each post
        const postsWithUsernames = await Promise.all(
          postsData.map(async (post) => {
            const userResponse = await axios.get(`https://dummyjson.com/users/${post.userId}`, {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            });
            const username = userResponse.data.username;
            return { ...post, username };
          })
        );

        setPosts(postsWithUsernames);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Error of getting posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [router]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    console.log(error)
    return <Error />;
  }

  return (
    <div className="flex mt-12 sm:mt-12 lg:mt-16 mb-16">
      <div className="min-h-screen w-[80%] mx-auto sm:w-[80%] md:w-[70%] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12">
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>

      {/* <SideBar post={posts} /> */}
    </div>
  );
};

export default Blogs;
