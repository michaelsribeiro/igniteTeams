import { useState } from 'react';
import { FlatList } from 'react-native';
import { Container, Form, HeaderList, QuantityOfPlayers } from './styles';

import Input from '@components/Input';
import Header from '@components/Header';
import Highlight from '@components/Highlight';
import ButtonIcon from '@components/ButtonIcon';
import Filter from '@components/Filter';

const Players = () => {
    const [team, setTeam] = useState('Time a');
    const [quantity, setQuantity] = useState([])

    return (
        <Container>
            <Header
                showBackBtn
            />
            <Highlight
                title='Nome da turma'
                subtitle='adicione a galera e separe os times'
            />
            <Form>
                <Input
                    placeholder='Nome da pessoa'
                    autoCorrect={false}
                />
                <ButtonIcon icon="add" />
            </Form>
            <HeaderList>
                <FlatList
                    data={['Time a', 'time b']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (        
                        <Filter
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
                <QuantityOfPlayers> {quantity.length} </QuantityOfPlayers>
            </HeaderList>                      

        </Container>
    )
}

export default Players;