"use client";
import styled from "styled-components";

export const StyledCountryCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.colors.element};
    color: ${({ theme }) => theme.colors.text};
    margin: 1rem;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    &:hover {
        transform: scale(1.05);
    }
`;

export const StyledCardContent = styled.div`
    padding: 1rem;
`;

export const StyledName = styled.h3`
    font-weight: ${({ theme }) => theme.fontWeights.bolder};
    margin: 1rem 0;
`;

export const StyledTitle = styled.span`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const StyledCountryDetail = styled.p`
    margin: 0.5rem 0;
`;