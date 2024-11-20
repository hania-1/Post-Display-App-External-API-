"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
}

const Post = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/external")
      .then((res) => res.json())
      .then((data) => setPosts(data.data))
      .catch(() => setError("Error fetching posts"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="py-16 px-6 bg-gray-100">
      {/* Flexbox for image and title */}
      <div className="flex items-center justify-center gap-6 mb-12">
        <Link href="/" className="text-xl md:text-2xl text-white font-serif">
          <Image
            src="/pic-22.png"
            alt="Logo"
            width={300}
            height={300}
            className="w-24 h-24 rounded-xl" 
          />
        </Link>
        <h1 className="text-4xl font-bold text-center m-24">Latest Posts</h1>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition"
          >
            <h2 className="text-xl font-semibold mb-4">{post.title}</h2>
            <p>{post.body}</p>
            <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
