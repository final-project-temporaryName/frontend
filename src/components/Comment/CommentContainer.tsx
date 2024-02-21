'use client';

import { MouseEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import BlackComment from './BlackComment';
import Comment from './Comment';
import CommentSend from './CommentSend';
import Free from './Free';
import RedLike from './BlackLike';
import Selling from './Selling';
import WhiteComment from './WhiteComment';
import WhiteLike from './WhiteLike';

interface CommentContainerProps {
  likeCount: number;
  commentCount: number;
  artworkStatus: 'PUBLIC' | 'SELLING' | 'FREE';
}

interface InputForm {
  comment?: string;
}

interface CommentData {
  imageUrl: string;
  nickName: string;
  createdAt: string;
  description: string;
}

const data: CommentData[] = [
  {
    imageUrl:
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?q=80&w=1301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nickName: 'Elon Musk',
    createdAt: '2024년 2월 11일',
    description: '내가 본 것 중에서 단연 최고였다. 와우~',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?q=80&w=1301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nickName: 'Elon Musk',
    createdAt: '2024년 2월 10일',
    description: '내가 본 것 중에서 단연 최고였다. 와우~',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?q=80&w=1301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nickName: 'Elon Musk',
    createdAt: '2024년 2월 9일',
    description: '내가 본 것 중에서 단연 최고였다. 와우~',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?q=80&w=1301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nickName: 'Elon Musk',
    createdAt: '2024년 2월 8일',
    description: '내가 본 것 중에서 단연 최고였다. 와우~',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?q=80&w=1301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nickName: 'Elon Musk',
    createdAt: '2024년 2월 7일',
    description: 'Awesome !!!!!',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?q=80&w=1301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nickName: 'Elon Musk',
    createdAt: '2024년 2월 6일',
    description: 'Slay',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?q=80&w=1301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nickName: 'Elon Musk',
    createdAt: '2024년 2월 6일',
    description: 'Slay',
  },
];

function CommentContainer({ likeCount, commentCount, artworkStatus }: CommentContainerProps) {
  const { register, handleSubmit } = useForm();

  const onValid = (data: InputForm) => {
    console.log('제출 버튼 클릭됨!');
    // data.comment를 첨부해서 post api 요청 로직 필요
  };

  return (
    <div className="relative">
      <div className="absolute -top-10 right-20 z-first">
        {artworkStatus === 'SELLING' ? <Selling /> : artworkStatus === 'FREE' ? <Free /> : null}
      </div>
      <div className="w-full min-w-360 rounded-t-sm bg-gray-1 shadow-top">
        <div className="flex max-h-250 flex-col overflow-y-scroll bg-gray-1 p-20 pb-7">
          {data &&
            data.length > 0 &&
            data.map((comment) => (
              <div key={comment.createdAt + comment.nickName}>
                <Comment
                  imageUrl={comment.imageUrl}
                  nickName={comment.nickName}
                  createdAt={comment.createdAt}
                  description={comment.description}
                />
              </div>
            ))}
        </div>
        <form className="flex items-center gap-13 bg-gray-1 p-20 pb-36" onSubmit={handleSubmit(onValid)}>
          <a id="des"></a>
          <input
            type="text"
            className="w-full rounded-sm bg-white px-20 py-10 text-15"
            placeholder="작가에게 한마디 남겨보세요!"
            {...register('comment')}
          />
          <button title="submit" type="submit">
            <CommentSend />
          </button>
        </form>
      </div>
    </div>
  );
}

export default CommentContainer;
