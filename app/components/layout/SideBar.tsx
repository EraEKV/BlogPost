interface Post {
    id: number;
    title: string;
    username: string;
    body: string;
    userId: number;
    tags: string[];
    reactions: number;
    views: number;
  }
  {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 ml-1">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
  </svg> */}

const SideBar: React.FC<{ posts: Post[] }> = ({ posts }) => {
    const recommendedPosts = [
      { id: 1, title: "Post 1", username: "Author 1", views: 150, reactions: { likes: 20 } },
      { id: 2, title: "Post 2", username: "Author 2", views: 120, reactions: { likes: 30 } },
      { id: 3, title: "Post 3", username: "Author 3", views: 200, reactions: { likes: 50 } }
    ];
  
    const recommendedTopics = ["Technology", "Lifestyle", "Travel", "Health"];
  
    return (
      <div className="hidden min-h-screen md:flex flex-col md:flex-row">
        <div className="w-full md:w-3/4 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12">
            {/* {posts.map((post) => (
              <Card key={post.id} post={post} />
            ))} */}
          </div>
        </div>
        <div className="w-full md:w-1/4 p-4 bg-[#f0f0f0]">
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Recommended Posts</h2>
            {recommendedPosts.map((post) => (
              <div key={post.id} className="bg-white p-4 mb-4 rounded-lg shadow-md border border-gray-300">
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="text-gray-600 text-sm">{post.username}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Recommended Topics</h2>
            <ul className="space-y-2">
              {recommendedTopics.map((topic, index) => (
                <li key={index} className="bg-white p-2 rounded-lg shadow-md border border-gray-300">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default SideBar;