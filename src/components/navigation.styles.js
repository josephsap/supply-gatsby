import { css } from "@emotion/react";

const styles = css`
  .nav-wrapper {
    display: flex;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }

  .nav-item {
    position: relative;
    display: flex;
    width: 10%;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    transition: width 500ms cubic-bezier(0.4, 0.0, 0.2, 1);
    
    &:nth-child(1){
      background-color: #FF8B8B;
    }	
    
    &:nth-child(2){
      background-color: #0BBCD6;
    }
      
    &:nth-child(3){
      background-color: #B18AE0;
    }
        
    &:nth-child(4){
      background-color: #EED974;
    }
          
    &:nth-child(5){
      background-color: #005397;
    }

    &:nth-child(6){
      background-color: #003497;
    }
    
    &:nth-child(7){
      background-color: #0b8397;
    }
    
    &.active, &:hover {
      width: 40%;
    }
    
    span {
      opacity: 0;
      transition: opacity 300ms cubic-bezier(0.4, 0.0, 0.2, 1);
      transition-delay: 0;
    }
    
    &:hover span {
      opacity: 1;
      transition-delay: 300ms;
    }
  }
`;

export default styles;