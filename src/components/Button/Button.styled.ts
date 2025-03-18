"use client";

import styled from "styled-components";

export const StyledButton = styled.button<{
	$hasShadow: boolean;
	$isBold: boolean;
	$iconMargin: boolean;
}>`
    all: unset;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.colors.element};
    color: ${({ theme }) => theme.colors.text};
    border: none;
    border-radius: 0.25rem;
    box-shadow: ${({ $hasShadow }) => ($hasShadow ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none")};
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-weight: ${({ $isBold, theme }) => ($isBold ? theme.fontWeights.bolder : theme.fontWeights.base)};

    &:hover {
        background-color: ${({ theme }) => theme.colors.background};
    }

    svg {
        margin-right: ${({ $iconMargin }) =>($iconMargin ? "1rem" : "0")};
    }

    &:disabled {
        background-color: ${({ theme }) => theme.colors.element};
        color: ${({ theme }) => theme.colors.text};
        cursor: not-allowed;
    }
`;

export const ButtonText = styled.span`
    text-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;