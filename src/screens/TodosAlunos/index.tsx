import { useMemo, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BarraPesquisa } from '../../components/BarraDePesquisa';
import { ListaAlunos } from '../../components/ListaAlunos';
import { useAlunos } from '../../context/AlunosContext';
import { styles } from './styles';

export function TodosAlunosScreen() {
  const { alunos, carregando, alternarMensalidade } = useAlunos();
  const [busca, setBusca] = useState('');

  const alunosFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();

    if (!termo) {
      return alunos;
    }

    return alunos.filter((aluno) => aluno.nome.toLowerCase().includes(termo));
  }, [alunos, busca]);

  if (carregando) {
    return (
      <View style={styles.carregando}>
        <ActivityIndicator size="large" color="#2563EB" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Text style={styles.titulo}>Todos os Alunos</Text>
      <Text style={styles.subtitulo}>Gerencie as mensalidades da escola</Text>

      <BarraPesquisa valor={busca} onChangeText={setBusca} />

      <ListaAlunos
        alunos={alunosFiltrados}
        variante="todos"
        tituloContagem="Total de alunos"
        mensagemVazia="Nenhum aluno encontrado."
        onAlternarMensalidade={alternarMensalidade}
      />
    </SafeAreaView>
  );
}

