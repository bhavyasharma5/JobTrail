import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  background: var(--background-color);
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
  border: 1px solid var(--grey-100);
  
  &:hover {
    background: var(--primary-50);
    box-shadow: var(--shadow-1);
    transform: translateY(-2px);
    
    .job-icon {
      background: var(--primary-100);
      color: var(--primary-700);
    }
  }
  
  .job-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--background-color);
    color: var(--primary-600);
    border-radius: var(--border-radius);
    padding: 0.5rem;
    font-size: 1.25rem;
    transition: all 0.2s ease;
  }
  
  .job-text {
    font-size: 0.95rem;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    line-height: 1.25;
    color: var(--grey-700);
    font-weight: 500;
  }
`;

export default Wrapper;
