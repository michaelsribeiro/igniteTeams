import { Container, Logo, BackIcon, BackButton } from './style'

import logo from '@assets/logo.png'

type Props = {
    showBackBtn?: boolean;
}

const Header = ({ showBackBtn = false }: Props ) => {
    return (
        <Container>
            {
                showBackBtn &&
                <BackButton>
                    <BackIcon/>
                </BackButton>
            }
            <Logo source={logo} />
        </Container>
    )
}  

export default Header;