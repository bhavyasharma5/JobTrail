import styled from 'styled-components';

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
    min-height: 100vh;
    background: var(--background-color);
    transition: var(--transition);
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 75%;
      background: linear-gradient(135deg, transparent 0%, var(--primary-50) 100%);
      opacity: 0.5;
      z-index: 0;
      pointer-events: none;
    }
  }
  
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
    transition: var(--transition);
    position: relative;
    z-index: 1;
  }
  
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    
    .dashboard-page {
      width: 90%;
      margin-left: 2rem;
      padding: 2rem;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      background: var(--background-secondary-color);
      border-radius: var(--border-radius);
      box-shadow: var(--shadow-1);
    }
  }
`;

export default Wrapper;
