import { useMemo, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BarraPesquisa } from '../../components/BarraDePesquisa';
import { ListaAlunos } from '../../components/ListaAlunos';
import { useAlunos } from '../../context/AlunosContext';
import { styles } from './styles';

export function AlunosInadimplentesScreen() {
  const { alunos, carregando, alternarMensalidade } = useAlunos();
  const [busca, setBusca] = useState('');

  const alunosInadimplentes = useMemo(() => {
    const termo = busca.trim().toLowerCase();

    return alunos.filter((aluno) => {
      const inadimplente = !aluno.mensalidadePaga;
      const correspondeBusca = aluno.nome.toLowerCase().includes(termo);

      return inadimplente && correspondeBusca;
    });
  }, [alunos, busca]);

  if (carregando) {
    return (
      <View style={styles.carregando}>
        <ActivityIndicator size="large" color="#DC2626" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Text style={styles.titulo}>Alunos Inadimplentes</Text>
      <Text style={styles.subtitulo}>Alunos com mensalidade em atraso</Text>

      <BarraPesquisa valor={busca} onChangeText={setBusca} />

      <ListaAlunos
        alunos={alunosInadimplentes}
        variante="inadimplente"
        tituloContagem="Alunos inadimplentes"
        mensagemVazia="Nenhum aluno inadimplente encontrado."
        onAlternarMensalidade={alternarMensalidade}
      />
    </SafeAreaView>
  );
}

