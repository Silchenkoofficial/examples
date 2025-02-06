import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: ${({ theme }) => theme.colors.primary};
    --secondary-color: ${({ theme }) => theme.colors.secondary};
    --text-color: ${({ theme }) => theme.colors.text};
    --background-color: ${({ theme }) => theme.colors.background};
  }
`;
