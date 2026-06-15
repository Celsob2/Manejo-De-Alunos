import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { AlunoCardProps } from "./types";

export function AlunoCard({
  aluno,
  variante = "todos",
  onAlternarMensalidade,
}: AlunoCardProps) {
  const adimplente = aluno.mensalidadePaga;

  const estiloCard =
    variante === "adimplente"
      ? styles.cardAdimplente
      : variante === "inadimplente"
        ? styles.cardInadimplente
        : adimplente
          ? styles.cardAdimplente
          : styles.cardInadimplente;

  const iconeNome =
    variante === "adimplente" || (variante === "todos" && adimplente)
      ? "checkmark-circle"
      : "alert-circle";

  const corIcone =
    variante === "adimplente" || (variante === "todos" && adimplente)
      ? "#16A34A"
      : "#DC2626";

  const textoStatus =
    variante === "adimplente" || (variante === "todos" && adimplente)
      ? "Mensalidade em dia"
      : "Mensalidade em atraso";

  const textoStatusCurto = adimplente ? "Pago" : "Em atraso";

  return (
    <View style={[styles.card, estiloCard]}>
      <View style={styles.cabecalho}>
        <View style={styles.infoPrincipal}>
          <Text style={styles.nome}>{aluno.nome}</Text>
          <Text style={styles.idade}>{aluno.idade} anos</Text>
        </View>
        <Ionicons name={iconeNome} size={28} color={corIcone} />
      </View>

      <View style={styles.statusContainer}>
        <Text style={[styles.statusTexto, { color: corIcone }]}>
          {variante === "todos" ? textoStatusCurto : textoStatus}
        </Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.botao,
          adimplente ? styles.botaoMarcarAtraso : styles.botaoMarcarPago,
          pressed && styles.botaoPressionado,
        ]}
        onPress={() => onAlternarMensalidade(aluno.id)}
      >
        <Ionicons
          name={
            adimplente ? "close-circle-outline" : "checkmark-circle-outline"
          }
          size={18}
          color="#FFFFFF"
        />
        <Text style={styles.botaoTexto}>
          {adimplente ? "Marcar como em atraso" : "Marcar como pago"}
        </Text>
      </Pressable>
    </View>
  );
}
