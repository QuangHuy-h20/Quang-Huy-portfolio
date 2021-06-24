import { css } from 'styled-components';

const mixins = {
    flexCenter: css`
      display: flex;
      justify-content: center;
      align-items: center;
    `,
  
    flexBetween: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    
    contactButton: css`
      color: #fff;
      padding: 16px 40px;
      font-size: var(--fs-md);
      border: 1px solid var(--orange);
      border-radius:9999px;
      transition: var(--transition);
      &:hover{
        background: rgba(255, 146, 100,.47);
      }
    `
}

export default mixins;