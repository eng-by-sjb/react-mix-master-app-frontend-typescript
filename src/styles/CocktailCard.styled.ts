import styled from "styled-components";

export const CocktailCardWrapper = styled.article`
  background: var(--white);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--borderRadius);

  &:hover {
    box-shadow: var(--shadow-4);
    transform: scale(1.02);
  }
  .underline-div:hover {
    visibility: visible;
  }

  img {
    width: 100%;
    display: block;
    object-fit: cover;
    height: 15rem;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
  }

  .footer {
    padding: 1.5rem;
    text-align: center;

    h5 {
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    .drink-name {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-bottom: 0.6rem;

      /* div:hover {
        visibility: visible;
      } */
    }

    .underline-div {
      margin: 0;
      background: var(--primary-700);
      width: 1.8rem;
      height: 0.2rem;
      border-radius: 20%;
      /* visibility: hidden; */
    }

    h4 {
      font-weight: 700;
    }
    p {
      margin-bottom: 1rem;
      color: var(--grey-500);
    }

    .btn {
      cursor: pointer;
      color: var(--white);
      background: var(--primary-500);
      border: transparent;
      border-radius: calc(var(--borderRadius) / 5);
      letter-spacing: var(--letterSpacing);
      padding: 0.375rem 0.75rem;
      box-shadow: var(--shadow-1);
      transition: var(--transition);
      text-transform: capitalize;
      display: inline-block;
    }
    .btn:hover {
      transform: scale(1.1);
    }
  }
`;
