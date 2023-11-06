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

    h4 {
      font-weight: 700;
    }
    p {
      margin-bottom: 1rem;
      color: var(--grey-500);
    }

    .btn:hover {
      transform: scale(1.1);
    }
  }
`;
