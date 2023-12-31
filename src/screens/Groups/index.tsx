import { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import { Container } from './styles';
import theme from '@theme/index';

import Header from '@components/Header';
import Highlight from '@components/Highlight';
import GroupCard from '@components/GroupCard';
import Button from '@components/Button';

const Groups = () => {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Container>
        <Header />
        <Highlight 
          title="Turmas"
          subtitle="Jogue com a sua turma"
        />        
        <FlatList
          data={groups}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <GroupCard 
              title={item}
            />
          )}
          contentContainerStyle={groups.length === 0 && {flex: 1}}
          ListEmptyComponent={() => (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{textAlign: 'center', color: theme.COLORS.GRAY_300}}>Que tal cadastrar a primeira turma?</Text>
            </View>
          )}
        />
        <Button
          title='Criar nova turma'
        />
       
    </Container>
  );
}

export default Groups;