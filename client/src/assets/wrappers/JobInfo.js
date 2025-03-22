import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  
  .job-icon {
    font-size: 1.2rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    color: var(--grey-600);
    transition: all 0.3s ease;
    
    svg {
      color: var(--primary-500);
    }
  }
  
  .job-text {
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    color: var(--grey-700);
    font-weight: 500;
  }
  
  &:hover .job-icon {
    color: var(--primary-600);
    transform: translateX(3px);
  }
`;

export default Wrapper;
