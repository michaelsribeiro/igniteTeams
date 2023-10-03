import { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Container, Form, HeaderList, QuantityOfPlayers } from './styles';
import { useTheme } from 'styled-components';

import Input from '@components/Input';
import Header from '@components/Header';
import Filter from '@components/Filter';
import Highlight from '@components/Highlight';
import ButtonIcon from '@components/ButtonIcon';
import PlayerCard from '@components/PlayerCard';
import Button from '@components/Button';

const Players = () => {
    const [team, setTeam] = useState('Time a');
    const [players, setPlayers] = useState(['a','b','c','d','e','f','g',]);

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
                <QuantityOfPlayers> {players.length} </QuantityOfPlayers>
            </HeaderList>    
            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <PlayerCard 
                        name={item}
                        onRemove={() => {}}    
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{paddingBottom: 40}, players.length === 0 && {flex: 1}]}
                ListEmptyComponent={() => (
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                      <Text style={{textAlign: 'center', color: useTheme().COLORS.GRAY_300}}>Não há pessoas neste time.</Text>
                    </View>
                  )}
            />
            <Button
                title='Remover Turma'
                type='DANGER'
            />
        </Container>
    )
}

export default Players;