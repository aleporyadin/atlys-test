import React, { useState } from "react";
import Post from "./Post";
import RegisterModal from "./RegisterModal";
import man from "../assets/man.png";
import girl from "../assets/girl.png";

const Posts: React.FC = () => {
  const posts = [
    {
      author: "Theresa Webb",
      authorAvatar: girl,
      message: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      icon: "👋",
      commentsCount: 24,
      time: "5mins ago",
      edited: false
    },
    {
      author: "Marvin McKinney",
      authorAvatar: man,
      message: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      icon: "😞",
      commentsCount: 24,
      time: "5mins ago",
      edited: true
    }
  ]
  const [ isOpen, setIsOpen ] = useState(false)
  
  const handlerOpenLoginWindow = () => {
    setIsOpen(true)
  }
  
  return (
    <div className="w-[48rem] mt-10 space-y-4 mx-auto flex flex-col" onClick={ () => setIsOpen(true) }>
      <div className="mb-5">
        <h1 className="text-gray-400 text-2xl">Hello Jane</h1>
        <p className="text-gray-200 text-md">How are you doing today? Would you like to share something with the
          community 🤗</p>
      </div>
      <div
        className="w-full  auto-rows-max	 post-container border-2 border-gray-800 p-5 space-y-4 rounded-md font-basier grid  bg-container">
        <div className="text-gray-300 text-xl">Create post</div>
        <div
          className="bg-message-container flex justify-start p-5 gap-x-5 items-center grid-rows-1 h-24 w-24 min-w-full min-h-[6em] rounded-md bg-gray-900">
          <div
            className="bg-container flex items-center justify-center relative w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
            💬
          </div>
          <div className="text-gray-500 text-lg"> How are you feeling today?</div>
        
        </div>
        <div className="flex justify-end">
          <button type="submit"
                  className="bg-blue-500  text-white text-lg  font-medium rounded-md text-md px-12 py-2.5 text-center">
            Post
          </button>
        </div>
      </div>
      
      { posts.map((post) =>
        (<Post post={ post } onClick={ handlerOpenLoginWindow }/>)
      ) }
      
      { isOpen &&
        <RegisterModal isOpen={ isOpen } onClose={ () => setIsOpen(false) }/>
      }
    </div>
  );
};

export default Posts;
