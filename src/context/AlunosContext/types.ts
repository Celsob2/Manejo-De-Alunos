import { Aluno } from "../../types/Aluno";

export interface AlunosContextData {
    alunos: Aluno[];
    carregando: boolean;
    alternarMensalidade: (id: number) => void;
  }