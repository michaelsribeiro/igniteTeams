import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native';

export type ButtonType = 'SUCCESS' | 'DANGER';

type Props = {
    type: ButtonType;
}

export const Container = styled(TouchableOpacity)<Props>`
    flex: 1;

    min-height: 56px;
    max-height: 56px;
    border-radius: 6px;

    align-items: center;
    justify-content: center;

    background-color: ${({ theme, type }) => type === 'SUCCESS' ? theme.COLORS.GREEN_700 : theme.COLORS.DARK_RED};
`;

export const BtnText = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    color: ${({theme}) => theme.COLORS.WHITE};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;