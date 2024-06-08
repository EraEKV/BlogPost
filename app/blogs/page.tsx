import axios from "axios"
import Card from "../components/Card"


interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}

interface PostsResponse {
  posts: Post[];
}

const allPosts = async () => {
  try {
    const response = await axios.get<PostsResponse>('https://dummyjson.com/posts/1');
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

const Blogs = () => {
    allPosts()
    return (
        <div className="min-h-screen mx-auto w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <Card  />
            <Card  />
            <Card  />
            <Card  />
            <Card  />
            <Card  />
            <Card  />
        </div>
    )
}

export default Blogs