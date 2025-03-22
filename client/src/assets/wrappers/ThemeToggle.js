import styled from 'styled-components';

const Wrapper = styled.button`
  background: transparent;
  border-color: transparent;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  cursor: pointer;
  border-radius: 50%;
  background: var(--primary-50);
  color: var(--primary-600);
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--primary-100);
    transform: scale(1.05);
  }
  
  .toggle-icon {
    font-size: 1.25rem;
    color: var(--primary-700);
  }
`;

export default Wrapper;
