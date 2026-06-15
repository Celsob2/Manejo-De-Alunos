import { useMemo, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BarraPesquisa } from '../../components/BarraDePesquisa';
import { ListaAlunos } from '../../components/ListaAlunos';
import { useAlunos } from '../../context/AlunosContext';
import { styles } from './styles';

export function AlunosAdimplentesScreen() {
  const { alunos, carregando, alternarMensalidade } = useAlunos();
  const [busca, setBusca] = useState('');

  const alunosAdimplentes = useMemo(() => {
    const termo = busca.trim().toLowerCase();

    return alunos.filter((aluno) => {
      const adimplente = aluno.mensalidadePaga;
      const correspondeBusca = aluno.nome.toLowerCase().includes(termo);

      return adimplente && correspondeBusca;
    });
  }, [alunos, busca]);

  if (carregando) {
    return (
      <View style={styles.carregando}>
        <ActivityIndicator size="large" color="#16A34A" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Text style={styles.titulo}>Alunos Adimplentes</Text>
      <Text style={styles.subtitulo}>Alunos com mensalidade em dia</Text>

      <BarraPesquisa valor={busca} onChangeText={setBusca} />

      <ListaAlunos
        alunos={alunosAdimplentes}
        variante="adimplente"
        tituloContagem="Alunos adimplentes"
        mensagemVazia="Nenhum aluno adimplente encontrado."
        onAlternarMensalidade={alternarMensalidade}
      />
    </SafeAreaView>
  );
};
