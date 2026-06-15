import { Aluno } from "../../types/Aluno";

export type VarianteCard = "todos" | "adimplente" | "inadimplente";

export interface AlunoCardProps {
  aluno: Aluno;
  variante?: VarianteCard;
  onAlternarMensalidade: (id: number) => void;
}

