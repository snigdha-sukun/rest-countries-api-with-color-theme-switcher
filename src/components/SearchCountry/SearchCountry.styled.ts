"use client";
import { mobile } from "@/utils/mixins";
import styled from "styled-components";

export const SearchCountryContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: ${({ theme }) => theme.colors.element};
    padding: 0 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    cursor: pointer;
    width: 30rem;

    ${mobile`
        width: 100%;
    `}
`;

export const SearchInput = styled.input`
    all: unset;
    flex: 1;
    width: 100%;
    font-size: 1rem;
    padding: 1rem;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.element};
    `;