import styled from 'styled-components';

export const Button = styled.button`
  margin-right: 12px;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;

  transition: background-color 250ms cubic-bezier(0.92, 0, 0.58, 1);

  &[name='good']:hover {
    background-color: greenyellow;
  }
  &[name='neutral']:hover {
    background-color: honeydew;
  }
  &[name='bad']:hover {
    background-color: red;
  }
`;
