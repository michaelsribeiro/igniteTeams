import { TouchableOpacityProps } from 'react-native';

import { Container, BtnText, ButtonType } from './style';

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonType;
}

const Button = ({ title, type = 'SUCCESS', ...rest }: Props) => {
    return (
        <Container 
            type={type}
            {...rest}
        >
            <BtnText>
                {title}
            </BtnText>
        </Container>
    )
}

export default Button;