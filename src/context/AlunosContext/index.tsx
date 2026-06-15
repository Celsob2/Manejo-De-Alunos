import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { alunosIniciais } from "../../data/alunosIniciais";
import { Aluno } from "../../types/Aluno";
import { AlunosContextData } from "./types";

const STORAGE_KEY = "@classmanegmente:alunos";

const AlunosContext = createContext<AlunosContextData>({} as AlunosContextData);

export function AlunosProvider({ children }: { children: React.ReactNode }) {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarAlunos() {
      try {
        const dadosSalvos = await AsyncStorage.getItem(STORAGE_KEY);

        if (dadosSalvos) {
          setAlunos(JSON.parse(dadosSalvos));
        } else {
          setAlunos(alunosIniciais);
        }
      } catch {
        setAlunos(alunosIniciais);
      } finally {
        setCarregando(false);
      }
    }

    carregarAlunos();
  }, []);

  useEffect(() => {
    if (!carregando) {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(alunos));
    }
  }, [alunos, carregando]);

  const alternarMensalidade = useCallback((id: number) => {
    setAlunos((listaAtual) =>
      listaAtual.map((aluno) =>
        aluno.id === id
          ? { ...aluno, mensalidadePaga: !aluno.mensalidadePaga }
          : aluno,
      ),
    );
  }, []);

  return (
    <AlunosContext.Provider value={{ alunos, carregando, alternarMensalidade }}>
      {children}
    </AlunosContext.Provider>
  );
}

export function useAlunos() {
  const contexto = useContext(AlunosContext);
  return contexto;
}
