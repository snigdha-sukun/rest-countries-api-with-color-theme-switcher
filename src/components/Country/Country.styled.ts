"use client";
import { mobile, tablet } from "@/utils/mixins";
import styled from "styled-components";

export const CountryContainer = styled.div`
    padding: 4rem;

    ${tablet`
        padding: 2rem;
    `}
    `;

export const CountryDetails = styled.div`
    display: flex;
    gap: 5rem;
    margin-top: 4rem;

    ${tablet`
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    `}

    ${mobile`
        gap: 1rem;
    `}
    `;

export const CountryInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    `;

export const CountryName = styled.h1`
    font-weight: ${({ theme }) => theme.fontWeights.bolder};
    `;

export const CountryDetailsContainer = styled.div`
    display: flex;
    gap: 10rem;

    ${mobile`
        flex-direction: column;
        gap: 2rem;
    `}
    `;

export const CountryBorderContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    `;
