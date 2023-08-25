import styled from 'styled-components';
import { Field, Form } from 'formik';

export const StyledForm = styled(Form)`
  color: white;
  background-color: #4d5ae5;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px;
  width: 200px;
  padding: 60px;
  border-radius: 10px;
`;

export const StyledFild = styled(Field)`
  margin: auto;
  padding: 4px;
  border-radius: 4px;
  text-align: center;
`;

export const AddButton = styled.button`
  padding: 16px 32px;
  border-radius: 4px;
  background-color: #404bbf;
  color: white;
  border-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 169px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const Container = styled.div`
  margin: auto;
  width: 360px;
  text-align: center;
`;
