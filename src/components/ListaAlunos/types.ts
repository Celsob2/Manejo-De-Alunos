import { Aluno } from "../../types/Aluno";

export type VarianteCard = 'todos' | 'adimplente' | 'inadimplente';

export interface ListaAlunosProps {
  alunos: Aluno[];
  variante?: VarianteCard;
  tituloContagem: string;
  mensagemVazia: string;
  onAlternarMensalidade: (id: number) => void;
}