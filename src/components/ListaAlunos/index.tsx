import { FlatList, Text, View } from 'react-native';

import { ListaAlunosProps } from './types';
import { AlunoCard } from '../AlunosCard';
import { styles } from './styles';



export function ListaAlunos({
  alunos,
  variante = 'todos',
  tituloContagem,
  mensagemVazia,
  onAlternarMensalidade,
}: ListaAlunosProps) {
  return (
    <View style={styles.container}>
      <View style={styles.contagemContainer}>
        <Text style={styles.contagemTexto}>
          {tituloContagem}: <Text style={styles.contagemNumero}>{alunos.length}</Text>
        </Text>
      </View>

      <FlatList
        data={alunos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <AlunoCard
            aluno={item}
            variante={variante}
            onAlternarMensalidade={onAlternarMensalidade}
          />
        )}
        ListEmptyComponent={
          <View style={styles.vazioContainer}>
            <Text style={styles.vazioTexto}>{mensagemVazia}</Text>
          </View>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={alunos.length === 0 && styles.listaVazia}
      />
    </View>
  );
}