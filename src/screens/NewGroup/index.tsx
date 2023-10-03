import { Text } from 'react-native';

import { Container, Content, Icon } from './styles';

import Header from '@components/Header';
import Highlight from '@components/Highlight';
import Input from '@components/Input';
import Button from '@components/Button';

const NewGroup = () => {
    return (
        <Container>
            <Header 
                showBackBtn
            />

            <Content>
                <Icon/>
                <Highlight
                    title='Nova Turma'
                    subtitle='crie uma turma para adicionar pessoas'
                />
                <Input
                    placeholder='Nome da turma'
                />    
                <Button
                    title='Criar'
                />
            </Content>
        </Container>
    )
}

export default NewGroup;