import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 2rem;

  .results-header {
    margin-bottom: 2rem;
  }

  .results-info {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .results-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-color);
    margin: 0;
  }

  .results-count {
    color: var(--text-secondary-color);
    font-size: 1rem;
    margin: 0;

    span {
      color: var(--primary-500);
      font-weight: 600;
    }
  }

  .jobs-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    
    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1400px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  /* Dark mode adjustments */
  .dark-theme & {
    .results-title {
      color: var(--grey-200);
    }

    .results-count {
      color: var(--grey-400);
    }
  }
`;
export default Wrapper;
