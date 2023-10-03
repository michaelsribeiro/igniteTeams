import { Container, Name, Icon } from './style';

import ButtonIcon from '@components/ButtonIcon';

type Props = {
    name: string;
    onRemove: () => void;
}

const PlayerCard = ({ name, onRemove }: Props) => {
    return(
        <Container>
            <Icon
                name="person"
            />
            <Name>
                {name}
            </Name>
            <ButtonIcon
                icon='close'
                type='DANGER'
                onPress={onRemove}
            />
        </Container>
    )
}

export default PlayerCard;