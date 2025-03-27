import styled from 'styled-components';

const Wrapper = styled.button`
  background: var(--background-secondary-color);
  border: 2px solid var(--primary-500);
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  cursor: pointer;
  border-radius: 50%;
  transition: var(--transition);
  box-shadow: var(--shadow-1);
  
  &:hover {
    background: var(--primary-50);
    transform: rotate(90deg);
  }
  
  .toggle-icon {
    font-size: 1.25rem;
    color: var(--primary-500);
  }
  
  svg {
    font-size: 1.25rem;
    color: var(--primary-500);
  }
`;

export default Wrapper;
