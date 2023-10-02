import styled from "styled-components/native";

import { useTheme } from "styled-components";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;

    background-color: ${() =>  useTheme().COLORS.GRAY_600};
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
    color: theme.COLORS.GREEN_700,
    size: theme.FONT_SIZE.XL,
}))``;