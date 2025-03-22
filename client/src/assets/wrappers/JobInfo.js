import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  
  .job-icon {
    font-size: 1.25rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    color: var(--primary-600);
    transition: all 0.2s ease;
    
    svg {
      color: var(--grey-600);
    }
  }
  
  .job-text {
    font-size: 0.95rem;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    color: var(--grey-700);
  }
  
  &:hover .job-icon {
    color: var(--primary-700);
    transform: scale(1.1);
  }
`;

export default Wrapper;
