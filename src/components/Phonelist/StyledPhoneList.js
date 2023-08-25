import styled from 'styled-components';

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #4d5ae5;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px;
  width: 200px;
  padding: 60px;
  border-radius: 10px;
  
  font-size: 18px;
  font-weight: 500;
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;
