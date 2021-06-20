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
      margin-top:40px;
      padding: 16px 40px;
      font-size: var(--fs-md);
      background: var(--orange);
      border-radius:9999px;
    `
}

export default mixins;