import React, { useState } from "react";

const Users = ({ posts, setPosts }) => {
  const [newPost, setNewPost] = useState({ name: "", title: "", desc: "" });
  const [editPost, setEditPost] = useState({ name: "", title: "", desc: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleAddPost = () => {
    setPosts([...posts, newPost]);
    setNewPost({ name: "", title: "", desc: "" });
  };

  const handleRemovePost = (index) => {
    const updatedPostsCopy = posts.filter((_, i) => i !== index);
    setPosts(updatedPostsCopy);
  };

  const handleEditPost = (index) => {
    setEditIndex(index);
    const postToEdit = posts[index];
    setEditPost({ ...postToEdit });
  };

  const handleSaveEdit = () => {
    const updatedPostsCopy = [...posts];
    updatedPostsCopy[editIndex] = editPost;
    setPosts(updatedPostsCopy);
    setEditPost({ name: "", title: "", desc: "" });
    setEditIndex(null);
  };

  return (
    <div className="flex">
      {/* Card for Adding */}
      <div className="flex-1 p-4">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl mb-4">Add New Post</h2>
          <input
            type="text"
            placeholder="Name"
            value={newPost.name}
            onChange={(e) =>
              setNewPost({ ...newPost, name: e.target.value })
            }
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="text"
            placeholder="Title"
            value={newPost.title}
            onChange={(e) =>
              setNewPost({ ...newPost, title: e.target.value })
            }
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="text"
            placeholder="Description"
            value={newPost.desc}
            onChange={(e) =>
              setNewPost({ ...newPost, desc: e.target.value })
            }
            className="mb-2 p-2 border rounded w-full"
          />
          <button
            onClick={handleAddPost}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Add Post
          </button>
        </div>
      </div>

      {/* Card for Removing */}
      <div className="flex-1 p-4">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl mb-4">Remove / Edit Posts</h2>
          <ul>
            {posts.map((post, index) => (
              <li key={index} className="mb-2">
                {index === editIndex ? (
                  <>
                    <input
                      type="text"
                      placeholder="Name"
                      value={editPost.name}
                      onChange={(e) =>
                        setEditPost({ ...editPost, name: e.target.value })
                      }
                      className="mb-2 p-2 border rounded w-full"
                    />
                    <input
                      type="text"
                      placeholder="Title"
                      value={editPost.title}
                      onChange={(e) =>
                        setEditPost({ ...editPost, title: e.target.value })
                      }
                      className="mb-2 p-2 border rounded w-full"
                    />
                    <input
                      type="text"
                      placeholder="Description"
                      value={editPost.desc}
                      onChange={(e) =>
                        setEditPost({ ...editPost, desc: e.target.value })
                      }
                      className="mb-2 p-2 border rounded w-full"
                    />
                    <button
                      onClick={handleSaveEdit}
                      className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <div className="flex justify-between">
                    <div>
                      {post.name} - {post.title}
                    </div>
                    <div>
                      <button
                        onClick={() => handleEditPost(index)}
                        className="mx-2 px-4 text-blue-600 hover:text-blue-800 border-2 border-blue-600 hover:border-blue-800 rounded-md"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleRemovePost(index)}
                        className="px-4 text-red-600 hover:text-red-800 border-2 border-red-600 hover:border-red-800 rounded-md"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Users;
