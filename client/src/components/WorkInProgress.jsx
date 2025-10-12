import { FaCog } from 'react-icons/fa';
import styled from 'styled-components';

const WorkInProgress = () => {
  return (
    <Wrapper>
      <div className="wip-container">
        <div className="gear-container">
          <FaCog className="gear gear-1" />
          <FaCog className="gear gear-2" />
          <FaCog className="gear gear-3" />
        </div>
        <h2>Work in Progress</h2>
        <p>We're building something amazing! Check back soon.</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 2rem;

  .wip-container {
    text-align: center;
    background: var(--background-secondary-color);
    padding: 3rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);
    max-width: 600px;
    width: 90vw;
  }

  .gear-container {
    position: relative;
    height: 150px;
    margin-bottom: 2rem;
  }

  .gear {
    position: absolute;
    color: var(--primary-500);
    animation: spin linear infinite;
  }

  .gear-1 {
    font-size: 80px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation-duration: 3s;
    z-index: 2;
  }

  .gear-2 {
    font-size: 60px;
    left: calc(50% - 60px);
    top: 20%;
    animation-duration: 3s;
    animation-direction: reverse;
    color: var(--primary-700);
  }

  .gear-3 {
    font-size: 40px;
    left: calc(50% + 50px);
    top: 60%;
    animation-duration: 3s;
    color: var(--primary-300);
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--primary-500), var(--primary-700));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient 3s ease infinite;
    background-size: 200% 200%;
  }

  p {
    color: var(--text-secondary-color);
    font-size: 1.1rem;
    line-height: 1.5;
    max-width: 400px;
    margin: 0 auto;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  /* Dark mode adjustments */
  .dark-theme & {
    .wip-container {
      background: var(--dark-mode-bg-secondary-color);
    }

    .gear {
      &.gear-1 {
        color: var(--primary-400);
      }
      &.gear-2 {
        color: var(--primary-600);
      }
      &.gear-3 {
        color: var(--primary-200);
      }
    }

    h2 {
      background: linear-gradient(135deg, var(--primary-300), var(--primary-500));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

export default WorkInProgress;
