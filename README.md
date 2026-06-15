# ClassManegmente

Aplicação React Native para gerenciamento de alunos e mensalidades escolares.

## Desafio da Semana - React Native

### Funcionalidades

- **Todos os Alunos**: lista completa com nome, idade e status da mensalidade
- **Alunos Inadimplentes**: filtro com layout vermelho e ícone de alerta
- **Alunos Adimplentes**: filtro com layout verde e ícone de confirmação

### Recursos bônus

- Barra de pesquisa por nome
- Contagem de alunos em cada tela
- Botão para alternar status da mensalidade
- Persistência de dados com AsyncStorage

### Conceitos praticados

- `useState` para gerenciamento de estado
- `FlatList` para renderização de listas
- `map()` e `filter()` para manipulação de arrays
- Renderização condicional
- Componentes reutilizáveis
- React Navigation (bottom tabs)
- Estilização dinâmica baseada no status

## Como executar

```bash
npm install
npm start
```

Depois, escaneie o QR Code com o app **Expo Go** (Android/iOS) ou pressione:

- `a` para Android
- `w` para Web

## Estrutura do projeto

```
src/
├── components/     # AlunoCard, BarraPesquisa, ListaAlunos
├── context/        # AlunosContext (estado global + AsyncStorage)
├── data/           # Dados iniciais dos alunos
├── navigation/     # Navegação por abas
├── screens/        # Telas da aplicação
└── types/          # Tipagem TypeScript
```

## Estrutura de um aluno

```javascript
{
  id: 1,
  nome: "João Silva",
  idade: 16,
  mensalidadePaga: true
}
```
