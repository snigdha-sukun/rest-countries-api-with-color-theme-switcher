"use client";
import { tablet } from "@/utils/mixins";
import styled from "styled-components";

export const StyledHomeContainer = styled.div`
    padding: 2rem;
    `;

export const CountryCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
    margin-top: 2rem;
    `;

export const StyledHomeHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0;

    ${tablet`
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    `}
`;