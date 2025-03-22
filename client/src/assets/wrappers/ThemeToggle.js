import styled from 'styled-components';

const Wrapper = styled.button`
  background: var(--primary-50);
  border-color: transparent;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  cursor: pointer;
  border-radius: 50%;
  transition: var(--transition);
  
  &:hover {
    background: var(--primary-100);
    transform: rotate(90deg);
  }
  
  .toggle-icon {
    font-size: 1.25rem;
    color: var(--primary-600);
  }
`;

export default Wrapper;
