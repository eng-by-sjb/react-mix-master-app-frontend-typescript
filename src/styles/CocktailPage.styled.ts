import styled from "styled-components";

export const CocktailPageWrapper = styled.div`
  margin-top: 5rem;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .img {
    border-radius: var(--borderRadius);
    width: 100%;
  }

  .drink-info {
    padding-top: 2rem;
    /* margin-left: 2rem; */
  }

  .drink p > span:not(.ing) {
    font-weight: 700;
  }
  .drink p {
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
    /* font-weight: 400; */
  }

  .drink-data {
    margin-right: 0.5rem;
    background-color: var(--primary-300);
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);
    color: var(--primary-700);
  }

  .ing {
    display: inline-block;
    margin-right: 0.2rem;
  }

  @media (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 3fr 3fr;
      gap: 3rem;
      align-items: center;
    }

    .drink-info {
      padding: 0;
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;

    .btn:hover {
      box-shadow: var(--shadow-3);
      transform: scale(1.02);
    }
  }
`;
