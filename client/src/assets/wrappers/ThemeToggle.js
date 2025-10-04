import styled from 'styled-components';

const Wrapper = styled.button`
  background: transparent;
  border: 2px solid transparent;
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(99, 102, 241, 0.1);
    border-color: rgba(99, 102, 241, 0.2);
  }
  
  .toggle-icon {
    font-size: 1.25rem;
    color: var(--text-color);
    transition: all 0.3s ease;
  }
  
  svg {
    font-size: 1.25rem;
    color: var(--text-color);
    transition: all 0.3s ease;
  }
  
  &:hover svg,
  &:hover .toggle-icon {
    color: var(--primary-600);
  }
`;

export default Wrapper;
