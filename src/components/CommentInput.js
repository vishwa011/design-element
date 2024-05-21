import React from 'react';
import styled from 'styled-components';

const CommentInputContainer = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #ddd;
  padding-top: 10px;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  font-size: 14px;
  margin-right: 5px;
  outline: none;
  background-color: #f8f8f8;
`;

const Button = styled.button`
  background-color: #ff6347;
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 18px;
  padding: 5px 10px;
  cursor: pointer;
  outline: none;
`;

const CommentInput = () => {
  return (
    <CommentInputContainer>
      <Input type="text" placeholder="Write comment..." />
      <Button>→</Button>
    </CommentInputContainer>
  );
};

export default CommentInput;
