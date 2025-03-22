import styled from 'styled-components';

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    opacity: 0;
    transition: var(--transition);
    visibility: hidden;
  }
  .show-sidebar {
    opacity: 1;
    visibility: visible;
  }
  .content {
    background: var(--background-secondary-color);
    width: 90%;
    max-width: 400px;
    height: 95vh;
    border-radius: var(--border-radius);
    padding: 3rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: var(--shadow-3);
  }
  .close-btn {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--red-dark);
    cursor: pointer;
    transition: var(--transition);
  }
  .close-btn:hover {
    color: var(--red-light);
    transform: scale(1.1);
  }
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--grey-700);
    padding: 1rem;
    text-transform: capitalize;
    transition: var(--transition);
    border-radius: var(--border-radius);
  }
  .nav-link:hover {
    background: var(--primary-50);
    color: var(--primary-600);
    padding-left: 1.5rem;
  }
  .nav-link.active {
    background: var(--primary-50);
    color: var(--primary-600);
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
  }
`;

export default Wrapper;
