import { Ionicons } from "@expo/vector-icons";
import { Pressable, TextInput, View } from "react-native";
import { BarraPesquisaProps } from "./types";
import { styles } from "./styles";

export function BarraPesquisa({
  valor,
  onChangeText,
  placeholder = "Buscar aluno pelo nome...",
}: BarraPesquisaProps) {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#6B7280" />
      <TextInput
        style={styles.input}
        value={valor}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        autoCapitalize="words"
        autoCorrect={false}
      />
      {valor.length > 0 && (
        <Pressable onPress={() => onChangeText("")} hitSlop={8}>
          <Ionicons name="close-circle" size={20} color="#9CA3AF" />
        </Pressable>
      )}
    </View>
  );
}
