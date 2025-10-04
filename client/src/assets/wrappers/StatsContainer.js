import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export default Wrapper;
