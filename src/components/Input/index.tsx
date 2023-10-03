
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

import { Container } from './styles';

const Input = ({...rest}: TextInputProps) => {
    return (
        <Container            
            placeholderTextColor={useTheme().COLORS.GRAY_300}
            {...rest}
        />
    )
}

export default Input;