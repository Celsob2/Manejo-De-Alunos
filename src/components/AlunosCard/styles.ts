import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1.5,
  },
  cardAdimplente: {
    backgroundColor: "#F0FDF4",
    borderColor: "#86EFAC",
  },
  cardInadimplente: {
    backgroundColor: "#FEF2F2",
    borderColor: "#FCA5A5",
  },
  cabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  infoPrincipal: {
    flex: 1,
  },
  nome: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 4,
  },
  idade: {
    fontSize: 14,
    color: "#6B7280",
  },
  statusContainer: {
    marginBottom: 12,
  },
  statusTexto: {
    fontSize: 15,
    fontWeight: "600",
  },
  botao: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 10,
    borderRadius: 10,
  },
  botaoMarcarPago: {
    backgroundColor: "#16A34A",
  },
  botaoMarcarAtraso: {
    backgroundColor: "#DC2626",
  },
  botaoPressionado: {
    opacity: 0.85,
  },
  botaoTexto: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
});
