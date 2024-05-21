import React from 'react';
import styled from 'styled-components';

const TaskNoteContainer = styled.div`
  margin-bottom: 10px;

  a {
    color: #007bff;
    text-decoration: none;
  }
`;

const TaskNote = () => {
  return (
    <TaskNoteContainer>
      <p>09382049832</p>
      <p><a href="http://www.flowervendor.com">www.flowervendor.com</a></p>
    </TaskNoteContainer>
  );
};

export default TaskNote;
