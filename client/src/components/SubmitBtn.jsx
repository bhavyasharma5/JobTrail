import { useNavigation } from 'react-router-dom';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  .submit-btn {
    height: 50px;
    position: relative;
    transition: all 0.3s ease;
    overflow: hidden;
    
    &:hover {
      transform: translateY(-2px);
    }
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }
  }
  
  .loading {
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
    margin-right: 8px;
    
    div {
      position: absolute;
      border: 3px solid var(--white);
      opacity: 1;
      border-radius: 50%;
      animation: loading 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    
    div:nth-child(2) {
      animation-delay: -0.5s;
    }
  }
  
  @keyframes loading {
    0% {
      top: 9px;
      left: 9px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 9px;
      left: 9px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 9px;
      left: 9px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 18px;
      height: 18px;
      opacity: 0;
    }
  }
`;

const SubmitBtn = ({ formBtn, text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  
  return (
    <ButtonWrapper>
      <button
        type='submit'
        className={`btn btn-block ${formBtn && 'form-btn'} submit-btn`}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="loading">
              <div></div>
              <div></div>
            </span>
            Processing...
          </>
        ) : (
          text || 'Submit'
        )}
      </button>
    </ButtonWrapper>
  );
};

export default SubmitBtn;
