"use client";
import styled from "styled-components";

    export const StyledSelect = styled.select`
    background-color: ${({ theme }) => theme.colors.element};
    color: ${({ theme }) => theme.colors.text};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    width: 20rem;
    cursor: pointer;
    position: relative;
    border: none;
    font-size: 1rem;
    border: none;
    outline: none;
`;

export const StyledOption = styled.option`
    padding: 1rem;
    border: none;
    cursor: pointer;
    font-size: 1rem;
`;
