"use client";
import { mobile } from "@/utils/mixins";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.colors.element};
    color: ${({ theme }) => theme.colors.text};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    ${mobile`
        padding: 1rem;
    `}
`;

export const Heading2 = styled.h2`
    font-weight: ${({ theme }) => theme.fontWeights.bolder};
    ${mobile`
        font-size: 1.3rem;`}
`;