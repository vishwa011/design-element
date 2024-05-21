import React from 'react';
import styled from 'styled-components';
import AssignTo from './AssignTo';
import TaskNote from './TaskNote';
import Comments from './Comments';

const TaskBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TaskBody = () => {
  return (
    <TaskBodyContainer>
      <AssignTo />
      <TaskNote />
      <Comments />
    </TaskBodyContainer>
  );
};

export default TaskBody;
