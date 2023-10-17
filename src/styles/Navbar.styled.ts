import styled from "styled-components";

export const NavWrapper = styled.nav`
  background: var(--white);
  box-shadow: var(--shadow-1);

  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 2rem;
  }

  .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    color: var(--primary-500);
    font-weight: 700;
    letter-spacing: 1.5px;
  }

  .nav-links {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    gap: 0.5rem;
  }

  .nav-link {
    text-align: center;
    color: var(--grey-900);
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    transition: var(--transition);
  }

  .active {
    color: var(--primary-500);
  }

  .nav-link:hover {
    color: var(--primary-500);
    transform: scale(1.05);
  }

  @media screen and (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
    }

    .nav-links {
      flex-direction: row;
      justify-content: end;
      margin-top: 0;
    }
  }
`;
