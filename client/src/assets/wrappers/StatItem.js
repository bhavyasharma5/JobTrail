import styled from 'styled-components';

const Wrapper = styled.article`
  padding: 1.75rem;
  background: var(--background-secondary-color);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${(props) => props.color};
  }

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    transform: translateY(-4px);
  }

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .count {
    display: block;
    font-weight: 700;
    font-size: 2.5rem;
    color: var(--text-color);
    line-height: 1;
  }

  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    text-align: left;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text-secondary-color);
    text-transform: uppercase;
  }

  .icon {
    width: 56px;
    height: 56px;
    background: ${(props) => props.bcg};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    
    svg {
      font-size: 1.75rem;
      color: ${(props) => props.color};
    }
  }
`;

export default Wrapper;
