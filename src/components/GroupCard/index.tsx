import { Container, Icon, Title } from './style';

type Props = {
    title: string;
}

const GroupCard = ({ title }: Props) => {
    return (
        <Container>
            <Icon />
            <Title>
                { title }
            </Title>
        </Container>        
    )
}

export default GroupCard;