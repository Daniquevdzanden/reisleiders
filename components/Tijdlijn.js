"use client";

import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Image from "next/image";

export default function Tijdlijn() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Koen de Lau",
      avatar: null,
      time: "3 uur geleden",
      isNew: true,
      title: "Reisleiders bestaan 1 jaar bij Aalsterbos",
      content:
        "Hier komt een stukje tekst over het 1 jarig bestaan van de reisleiders van Aalsterbos...",
      likes: 5,
      likedByYou: true,
      comments: 1,
      commentsList: [
        {
          id: 1,
          author: "Sophie Bakker",
          content: "Gefeliciteerd met dit mooie jubileum!",
          time: "2 uur geleden",
        },
      ],
    },
    {
      id: 2,
      author: "Lisa Jansen",
      avatar: null,
      time: "1 dag geleden",
      isNew: false,
      title: "Nieuwe training gepland",
      content:
        "Volgende week staat er een nieuwe training op het programma voor alle reisleiders...",
      likes: 12,
      likedByYou: false,
      comments: 3,
      commentsList: [
        {
          id: 1,
          author: "Tom Hendriks",
          content: "Klinkt interessant! Waar kunnen we ons aanmelden?",
          time: "20 uur geleden",
        },
        {
          id: 2,
          author: "Emma de Groot",
          content: "Ik ben er ook bij!",
          time: "18 uur geleden",
        },
        {
          id: 3,
          author: "Lisa Jansen",
          content: "Je kunt je aanmelden via de mail die je hebt ontvangen.",
          time: "15 uur geleden",
        },
      ],
    },
    {
      id: 3,
      author: "Mark de Vries",
      avatar: null,
      time: "2 dagen geleden",
      isNew: false,
      title: "Foto's van de laatste reis",
      content:
        "De foto's van onze laatste reis naar de Ardennen staan nu online...",
      likes: 24,
      likedByYou: true,
      comments: 8,
      commentsList: [
        {
          id: 1,
          author: "Piet Smit",
          content: "Wat een mooie foto's! Ziet er geweldig uit.",
          time: "1 dag geleden",
        },
        {
          id: 2,
          author: "Anna Visser",
          content: "Wat een leuke herinnering!",
          time: "1 dag geleden",
        },
      ],
    },
  ]);

  const [openCommentPostId, setOpenCommentPostId] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [expandedPostIds, setExpandedPostIds] = useState([]);

  const handleLikeToggle = (postId) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            likedByYou: !post.likedByYou,
            likes: post.likedByYou ? post.likes - 1 : post.likes + 1,
          };
        }
        return post;
      })
    );
  };

  const toggleCommentArea = (postId) => {
    setOpenCommentPostId(openCommentPostId === postId ? null : postId);
  };

  const handleAddComment = (postId) => {
    if (!commentText.trim()) return;

    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          const newComment = {
            id: post.commentsList.length + 1,
            author: "Danique van der Zanden",
            content: commentText,
            time: "Zojuist",
          };
          return {
            ...post,
            commentsList: [...post.commentsList, newComment],
            comments: post.comments + 1,
          };
        }
        return post;
      })
    );
    setCommentText("");
  };

  const toggleExpandPost = (postId) => {
    setExpandedPostIds((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl md:text-3xl font-baloo text-atalenta-paars mb-3 font-bold">
        Tijdlijn
      </h1>

      {/* Post Creation Area */}
      <div className="mb-6 overflow-hidden rounded-3xl bg-white p-8 md:p-10">
        {/* Title Input Row */}
        <div className="flex items-center gap-4 mb-4">
          <Image
            alt=""
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            width={32}
            height={32}
            className="size-12 rounded-full bg-gray-50 outline -outline-offset-1 outline-black/5 shrink-0"
          />
          <div className="flex-1">
            <Input type="text" placeholder="Titel..." whiteBackground={false} />
          </div>
        </div>

        {/* Rich Text Editor */}
        <div className="bg-[#F4F3F8] rounded-tl-lg rounded-tr-2xl rounded-bl-2xl rounded-br-3xl outline-1 -outline-offset-1 outline-[#D1CCE3] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#A99BCC] overflow-hidden">
          {/* Toolbar */}
          <div className="flex items-center gap-1 px-3 py-2">
            <button className="p-1.5 hover:bg-white/50 rounded font-bold text-gray-600 text-lg">
              B
            </button>
            <button className="p-1.5 hover:bg-white/50 rounded italic text-gray-600 text-lg">
              I
            </button>
            <button className="p-1.5 hover:bg-white/50 rounded underline text-gray-600 text-lg">
              U
            </button>
            <div className="w-px h-5 bg-[#D1CCE3] mx-1"></div>
            <button className="p-1.5 hover:bg-white/50 rounded text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </button>
            <button className="p-1.5 hover:bg-white/50 rounded text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </button>
            <button className="p-1.5 hover:bg-white/50 rounded text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Textarea */}
          <textarea
            placeholder="Deel hier je bericht..."
            className="w-full px-5 py-2 min-h-20 resize-none bg-transparent focus:outline-none text-gray-900 placeholder:text-gray-400 text-sm"
          />
        </div>

        {/* Post Button */}
        <div className="flex justify-end mt-4">
          <Button type="submit" text="Plaatsen" disabled={false} />
        </div>

        <div className="mt-6 ">
          <div className="overflow-y-auto max-h-125 space-y-4 pr-2 scrollbar-thin scrollbar-thumb-[#D1CCE3] scrollbar-track-transparent">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl p-5 border border-gray-200"
              >
                {/* Post Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                    {post.avatar ? (
                      <Image
                        src={post.avatar}
                        alt={post.author}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">
                      {post.author}
                    </p>
                    <p className="text-sm text-gray-700">{post.time}</p>
                  </div>
                  {post.isNew && (
                    <span className="bg-atalenta-paars text-white text-2xl font-normal px-5 py-0.5 rounded-xl font-caveat-brush ml-5">
                      Nieuw!
                    </span>
                  )}
                </div>

                {/* Post Content */}
                <h3 className="font-extrabold text-lg text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-2">
                  {expandedPostIds.includes(post.id)
                    ? post.content
                    : post.content.length > 100
                    ? post.content.substring(0, 100) + "..."
                    : post.content}
                </p>
                {post.content.length > 100 && (
                  <button
                    onClick={() => toggleExpandPost(post.id)}
                    className="text-gray-800 underline text-sm font-medium hover:text-[#7B5EA7] cursor-pointer"
                  >
                    {expandedPostIds.includes(post.id)
                      ? "Minder lezen"
                      : "Meer lezen"}
                  </button>
                )}

                {/* Post Footer */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-4 h-4 ${
                          post.likedByYou ? "text-red-500 fill-red-500" : ""
                        }`}
                        fill={post.likedByYou ? "currentColor" : "none"}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      {post.likedByYou
                        ? "Jij en " + (post.likes - 1) + " andere"
                        : post.likes + " likes"}
                    </span>
                    <span>
                      {post.comments} reactie{post.comments !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleLikeToggle(post.id)}
                      className={`group p-1 cursor-pointer ${
                        post.likedByYou
                          ? "text-red-500"
                          : "text-gray-600 hover:text-red-500"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-5 h-5 group-hover:fill-red-500 ${
                          post.likedByYou ? "fill-red-500" : ""
                        }`}
                        fill={post.likedByYou ? "currentColor" : "none"}
                        viewBox="0 0 24 24"
                        stroke={post.likedByYou ? "none" : "currentColor"}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => toggleCommentArea(post.id)}
                      className="p-1 hover:text-[#7B5EA7] text-gray-600 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Comment Area */}
                {openCommentPostId === post.id && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    {/* Existing Comments */}
                    {post.commentsList.length > 0 && (
                      <div className="mb-4 space-y-3">
                        {post.commentsList.map((comment) => (
                          <div key={comment.id} className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            </div>
                            <div className="flex-1 bg-gray-50 rounded-lg p-3">
                              <div className="flex items-center gap-2 mb-1">
                                <p className="font-semibold text-gray-800 text-sm">
                                  {comment.author}
                                </p>
                                <span className="text-xs text-gray-500">
                                  {comment.time}
                                </span>
                              </div>
                              <p className="text-gray-700 text-sm">
                                {comment.content}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Add Comment */}
                    <div className="bg-[#F4F3F8] rounded-tl-lg rounded-tr-2xl rounded-bl-2xl rounded-br-3xl outline-1 -outline-offset-1 outline-[#D1CCE3] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#A99BCC] overflow-hidden">
                      <textarea
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        placeholder="Schrijf een reactie..."
                        className="w-full px-5 py-3 min-h-20 resize-none bg-transparent focus:outline-none text-gray-900 placeholder:text-gray-400 text-sm"
                      />
                    </div>
                    <div className="flex justify-end mt-3">
                      <Button
                        type="button"
                        text="Reageren"
                        disabled={!commentText.trim()}
                        onClick={() => handleAddComment(post.id)}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
