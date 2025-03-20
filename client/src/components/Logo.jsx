import styled from 'styled-components';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  
  .job {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--grey-900);
    margin-right: 2px;
  }
  
  .trail {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--primary-600);
    position: relative;
  }
  
  .trail::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 0;
    width: 100%;
    height: 6px;
    background: var(--primary-100);
    z-index: -1;
    border-radius: 4px;
  }
  
  .icon {
    color: var(--primary-500);
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
`;

const Logo = () => {
  return (
    <LogoWrapper className="logo">
      <span className="job">Job</span>
      <span className="trail">Trail</span>
    </LogoWrapper>
  );
};

export default Logo;
