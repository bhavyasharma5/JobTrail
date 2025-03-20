import styled from 'styled-components';

const Wrapper = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background: linear-gradient(135deg, var(--grey-50) 0%, var(--background-color) 100%);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(var(--primary-100) 2px, transparent 2px),
      radial-gradient(var(--primary-100) 2px, transparent 2px);
    background-size: 40px 40px;
    background-position: 0 0, 20px 20px;
    opacity: 0.3;
    z-index: 0;
  }
  
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
  }
  
  /* Hero Section Styles */
  .hero-container {
    position: relative;
    z-index: 1;
    min-height: 70vh; 
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    padding: 2rem 0;
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
  }
  
  .hero-content {
    padding-bottom: 2rem;
  }
  
  h1 {
    font-weight: 800;
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    line-height: 1.1;
    margin-bottom: 1.5rem;
    background: linear-gradient(90deg, var(--grey-900) 0%, var(--primary-700) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  
  .tagline {
    font-size: clamp(1.1rem, 2vw, 1.5rem);
    font-weight: 600;
    color: var(--primary-600);
    margin-bottom: 2rem;
    display: block;
  }
  
  p {
    line-height: 1.8;
    color: var(--grey-600);
    margin-bottom: 2.5rem;
    max-width: 35em;
    font-size: 1.1rem;
  }
  
  .register-link {
    margin-right: 1.5rem;
  }

  /* Benefits Section Styles */
  .highlights-container {
    position: relative;
    z-index: 1;
    padding: 4rem 1rem;
    width: 100%;
    background: var(--grey-50);
    box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.05);
  }
  
  .section-title {
    text-align: center;
    margin-bottom: 3rem;
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin-left: auto;
    margin-right: auto;
    
    h2 {
      font-size: 2rem;
      font-weight: 700;
      color: var(--grey-900);
      margin-bottom: 0.75rem;
    }
    
    .underline {
      height: 3px;
      width: 80px;
      background: linear-gradient(to right, var(--primary-300), var(--primary-600));
      margin: 0 auto;
      border-radius: 10px;
    }
  }
  
  .benefits-grid {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto 3rem;
    display: grid;
    gap: 2rem;
  }
  
  .benefit-card {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border-radius: var(--border-radius);
    padding: 2rem;
    box-shadow: var(--shadow-2);
    transition: var(--transition);
    text-align: center;
    position: relative;
    z-index: 1;
    overflow: hidden;
    height: 100%;
    min-height: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0;
      background: linear-gradient(to bottom, var(--primary-100), transparent);
      transition: height 0.3s ease;
      z-index: -1;
    }
    
    &:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-3);
      
      &::before {
        height: 100%;
      }
      
      .benefit-icon {
        background: var(--primary-600);
        color: white;
        transform: scale(1.1);
      }
    }
    
    h4 {
      margin: 1.25rem 0 1rem;
      font-weight: 600;
      font-size: 1.25rem;
      color: var(--grey-900);
    }
    
    p {
      margin-bottom: 0;
      color: var(--grey-600);
      font-size: 1rem;
      line-height: 1.6;
    }
  }
  
  .benefit-icon {
    font-size: 1.75rem;
    color: var(--primary-600);
    background: var(--primary-50);
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    transition: var(--transition);
    border: 1px solid var(--primary-100);
  }
  
  .cta-container {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    text-align: center;
    padding: 2.5rem;
    background: linear-gradient(135deg, var(--primary-50) 0%, white 100%);
    border-radius: var(--border-radius);
    border: 1px solid var(--primary-100);
    
    .cta-text {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--grey-900);
      margin-bottom: 1.5rem;
    }
    
    .btn {
      min-width: 200px;
    }
  }
  
  .main-img {
    max-width: 100%;
    display: none;
    filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.15));
    transition: var(--transition);
    
    &:hover {
      transform: scale(1.03);
    }
  }
  
  .image-container {
    display: none;
    justify-content: center;
    align-items: center;
  }
  
  .btn {
    font-size: 1.05rem;
    font-weight: 500;
    padding: 0.9rem 2rem;
    border-radius: var(--border-radius-full);
    box-shadow: var(--shadow-2);
  }
  
  .btn-hero {
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    background: linear-gradient(90deg, var(--primary-600) 0%, var(--primary-700) 100%);
    color: white;
    border: none;
    position: relative;
    overflow: hidden;
    z-index: 1;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%);
      transition: 0.5s;
      z-index: -1;
    }
    
    &:hover::before {
      left: 100%;
    }
    
    &:hover {
      color: white;
    }
  }
  
  .btn:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-3);
  }
  
  .btn-hipster {
    background: transparent;
    color: var(--primary-700);
    border: 1px solid var(--primary-300);
    
    &:hover {
      background: var(--primary-50);
      border-color: var(--primary-400);
      color: var(--primary-700);
    }
  }
  
  /* Media Queries */
  @media (min-width: 576px) {
    .benefits-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  }
  
  @media (min-width: 768px) {
    .highlights-container {
      padding: 5rem 2rem;
    }
    
    .benefits-grid {
      gap: 2.5rem;
    }
  }
  
  @media (min-width: 992px) {
    .hero-container {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    
    .image-container {
      display: flex;
    }
    
    .main-img {
      display: block;
      max-height: 70vh;
      object-fit: contain;
    }
    
    .benefits-grid {
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
    }
    
    .benefit-card {
      min-height: 240px;
    }
  }
  
  @media (min-width: 1200px) {
    .main-img {
      max-width: 90%;
    }
    
    .highlights-container {
      padding: 6rem 2rem;
    }
  }
`;
export default Wrapper;
