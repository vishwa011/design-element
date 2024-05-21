import React from 'react';
import styled from 'styled-components';
import TaskHeader from './TaskHeader';
import TaskBody from './TaskBody';

const TaskCardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ffd700;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  padding: 15px;
  margin: 20px auto;
`;

const TaskCard = () => {
  return (
    <TaskCardContainer>
      <TaskHeader />
      <TaskBody />
    </TaskCardContainer>
  );
};

export default TaskCard;
