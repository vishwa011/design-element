import React from 'react';
import styled from 'styled-components';

const TaskHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const TaskInput = styled.input`
  font-size: 16px;
  border: none;
  outline: none;
  font-weight: bold;
  margin-bottom: 5px;
`;

const TaskTime = styled.div`
  font-size: 14px;
  color: #555;
`;

const TaskHeader = () => {
  return (
    <TaskHeaderContainer>
      <TaskInput type="text" value="Flower Arrangement" readOnly />
      <TaskTime>Dec 5, 2024 at 8:00-10:00 AM</TaskTime>
    </TaskHeaderContainer>
  );
};

export default TaskHeader;
