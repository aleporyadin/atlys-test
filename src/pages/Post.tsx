import React from "react";
import CommentIcon from "../icons/CommentIcon";
import ThreeDotsIcon from "../icons/ThreeDotsIcon";

interface PostProps {
  post: {
    author: string;
    authorAvatar: string;
    message: string;
    icon: string;
    time: string;
    commentsCount: number;
    edited: boolean;
  };
  onClick: () => void;
}

const Post: React.FC<PostProps> = ({ post, onClick }) => {
  const { author, authorAvatar, message, icon, time, commentsCount, edited } = post;
  
  return (
    <div
      className="w-full post-container border-2 border-gray-800 p-5 space-y-4 rounded-md font-basier grid  bg-container"
      onClick={ () => onClick() }>
      <div className="flex justify-between items-center">
        <div className="flex">
          <img className=" w-12 h-12 rounded-full object-cover mr-4 shadow" src={ authorAvatar } alt=""/>
          <div className="flex flex-col">
            <span className="text-gray-300">{ author }</span>
            <span className="text-gray-400">{ time } { edited ? " • Edited" : "" }</span>
          </div>
        </div>
        <ThreeDotsIcon/>
      </div>
      <div
        className="bg-message-container grid gap-x-5 items-center p-5 h-24 w-24 min-w-full min-h-[8em] rounded-md bg-gray-900">
        <div
          className="bg-container flex items-center justify-center w-12 h-12   rounded-full">
          { icon }
        </div>
        <div className="col-start-2 text-gray-500 text-lg">{ message }</div>
      
      </div>
      <div className="flex justify-start">
        <CommentIcon/> <span className="text-gray-500 ml-2">{ commentsCount } comments</span>
      </div>
    </div>
  );
};

export default Post;
