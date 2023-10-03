import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Icon, ButtonIconType } from './styles';

type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap;
    type?: ButtonIconType;
}

const ButtonIcon = ({ icon, type = 'SUCCESS', ...rest }: Props) => {
    return (
        <Container {...rest}>
            <Icon
                name={icon}
                type={type}
            />
        </Container>
    );
}

export default ButtonIcon;