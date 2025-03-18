"use client";
import { mobile } from "@/utils/mixins";
import styled from "styled-components";

export const StyledCustomSelect = styled.div`
  position: relative;
  width: 20rem;
  cursor: pointer;

  ${mobile`
        width: 60%;
    `}
`;

export const StyledSelectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.element};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
`;

export const StyledArrowIcon = styled.span<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.2s;
`;

export const StyledDropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.element};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  margin-top: 0.5rem;
  padding: 0;
  list-style: none;
  z-index: 100;
`;

export const StyledDropdownItem = styled.li<{ $isSelected: boolean }>`
  padding: 1rem;
  background-color: ${({ $isSelected, theme }) =>
		$isSelected ? theme.colors.background : theme.colors.element};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ $isSelected, theme }) => ($isSelected ? theme.fontWeights.bold : theme.fontWeights.base)};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;
