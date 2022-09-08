import styled from "styled-components";

const ProductsContainerStyled = styled.div`
    width: 100%;
    max-width: 900px;
    margin: auto;
    --grid-layout-gap: 10px;
    --grid-column-count: 4;
    --grid-item--min-width: 250px;

    /**
   * Calculated values.
   */
    --gap-count: calc(var(--grid-column-count) - 1);
    --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
    --grid-item--max-width: calc(
        (100% - var(--total-gap-width)) / var(--grid-column-count)
    );

    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(
            max(var(--grid-item--min-width), var(--grid-item--max-width)),
            1fr
        )
    );
    grid-gap: var(--grid-layout-gap);

    @media (max-width: 480px) {
        width: 90%;
        display: flex;
        flex-direction: column;
    }
`;

export default ProductsContainerStyled;
