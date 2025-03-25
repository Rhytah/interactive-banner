import styled from 'styled-components';

const FormWrapper = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const FormTitle = styled.h2`
  color: #343a40;
  margin-bottom: 20px;
  font-size: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  color: #495057;
`;

const Input = styled.input`
  width: 97%;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1rem;
  padding: 0.5rem;
  ${props => props.type === 'color' && `
    height: 3rem;
    cursor: pointer;
    width:15rem;
    border-radius: 0.5rem;
  `}
`;

const Textarea = styled.textarea`
  width: 97%;
  padding: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1em;
  resize: vertical;
  min-height: 100px;
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 60%;
`;
export { FormWrapper, FormTitle, FormGroup, Label, Input, Textarea, FlexContainer };