import React from 'react';
import styled from 'styled-components';

const AssignToContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const AssignTo = () => {
  return (
    <AssignToContainer>
      <Avatar src="user-avatar.jpg" alt="Jane Smith" />
      <span>Jane Smith</span>
    </AssignToContainer>
  );
};

export default AssignTo;
