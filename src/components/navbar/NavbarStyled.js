import styled from "styled-components";

const NavbarStyled = styled.nav`
    position: sticky;
    z-index: 10;
    top: 0;
    display: flex;
    background-color: #f8d9fc;
    padding: 5px 15px;

    .filters-button {
        background-color: red;
        margin-left: auto;
        margin-right: 10px;
    }

    button {
        background-color: transparent;
        border: none;
        outline: none;
        height: 30px;
        cursor: pointer;
        img {
            height: 100%;
            object-fit: contain;
        }
    }

    ul {
        list-style: none;
        position: absolute;
        background-color: white;
        top: 50px;
        left: 20px;
        flex-direction: column;
        align-items: flex-start;
        width: 200px;
        border: 1px solid gray;
        padding: 15px;
        box-shadow: 3px 3px 5px 0 #11111185;
    }

    @media (max-width: 480px) {
        gap: 10px;
        justify-content: center;
        .filters-button {
            margin: 0;
        }
    }
`;

export default NavbarStyled;
