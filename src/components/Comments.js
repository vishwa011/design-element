import React from 'react';
import styled from 'styled-components';
import CommentInput from './CommentInput';

const CommentsContainer = styled.div`
  border-top: 1px solid #ddd;
  padding-top: 10px;
`;

const Comment = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

const CommentText = styled.p`
  background-color: #f8f8f8;
  border-radius: 5px;
  padding: 8px 12px;
  margin: 0;
  font-size: 14px;
`;

const Comments = () => {
  return (
    <CommentsContainer>
      <Comment>
        <Avatar src="user-avatar.jpg" alt="Jane Smith" />
        <CommentText>Thanks for assigning me on the task. We'll get the details ironed out.</CommentText>
      </Comment>
      <Comment>
        <Avatar src="user-avatar.jpg" alt="Jane Smith" />
        <CommentText>Thanks for assigning me on the task. We'll get the details ironed out.</CommentText>
      </Comment>
      <CommentInput />
    </CommentsContainer>
  );
};

export default Comments;
