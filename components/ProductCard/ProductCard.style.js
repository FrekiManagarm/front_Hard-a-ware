import styled from "styled-components";
import { MAIN_COLOR } from "../../settings/constants";

export const ProductCardWrapper = styled.div`
    min-width: 300px;
    min-height: 450px;
    border: 1px solid;
    border-radius: 10px;
`;

export const ProductCardImageWrapper = styled.div`

`;

export const ProductCardBottomWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const ProductCardTitle = styled.p`
    font-weight: 600;
`;

export const ProductCardButton = styled.a`
    text-decoration: none;
    color: white;
    padding: 2rem;
    background-color: ${MAIN_COLOR};
    min-width: 100%;
    border-radius: 25px;
    font-size: 24px;

    &:hover {
        background-color: grey;
        transition: all 0.5s ease;
    }
`;