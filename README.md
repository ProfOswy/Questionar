# Questionar

**Matemática, Física e Química no estilo ENEM**: estudo com feedback, relatórios e competições para a turma.

Criado por **Prof. Me. Rodrigo Gonçalves (Prof Oswy)**, em parceria com o **Colégio INTEGRADO**.
🌐 Acesse: https://profoswy.github.io/Questionar/ · ▶️ [youtube.com/@ProfOswy](https://youtube.com/@ProfOswy)

---

## O que é

O Questionar é uma ferramenta gratuita para estudantes do ensino médio e pré-vestibulandos treinarem os conteúdos de **Matemática, Física e Química** mais cobrados no ENEM. Ele combina dois tipos de questão:

- **Questões similares**, geradas por programação (sem IA) a partir de modelos no estilo ENEM, com texto-base contextualizado, figuras, cinco alternativas (só uma correta, com distratores baseados em erros comuns) e **resolução passo a passo**. Os valores mudam a cada questão, então o banco não se esgota.
- **Questões oficiais do ENEM** (2022 a 2025, 2º dia), reproduzidas das provas do INEP, com o **gabarito oficial**.

| Disciplina | Assuntos | Geradores de questões | Questões oficiais do ENEM |
|---|---|---|---|
| Matemática | 11 | 31 | 177 |
| Física | 8 | 24 | 56 |
| Química | 9 | 22 | 53 |

## Funcionalidades

**📘 Estudar**
- Escolha da disciplina, do assunto, do conceito e da quantidade de questões.
- Fonte das questões: **Só ENEM**, **Similares** ou **Misturadas**; no modo ENEM, filtro por assunto e por prova (ano).
- Feedback imediato, resolução passo a passo e navegação para rever questões já respondidas.
- **Relatório final**: questões feitas, acertos, aproveitamento, tempo total e médio, desempenho por temática e conceitos a revisar. Pode ser impresso, salvo em PDF ou baixado.
- Histórico dos últimos relatórios salvo no navegador.

**🏆 Competir**
- O professor escolhe disciplina, assuntos, fonte e número de questões e gera um **código** (ou link). Todos os alunos recebem as mesmas questões, na mesma ordem.
- **Pontuação = acertos; desempate = menor tempo.**
- **Tempo limite** por aluno (com contagem regressiva e encerramento automático) e **horário de encerramento** da competição.
- **Código com tempo adicional (+50%)** para estudantes com direito a atendimento especializado, no mesmo ranking.
- Ao final, o aluno recebe um **código de resultado** verificável; com a planilha configurada, o resultado é **enviado automaticamente** ao professor.
- **Ranking** com pódio, tabela, percentual de acerto por questão e exportação em CSV.

**🧰 Ferramentas**
- Calculadora científica (arrastável e com suporte a teclado).
- Tabela periódica interativa (dados básicos, distribuição de Linus Pauling e camadas).

**♿ Acessibilidade** (botão no topo ou `Alt + A`)
- Tamanho do texto, alto contraste, fonte de leitura facilitada (Atkinson Hyperlegible), espaçamento ampliado, redução de animações, régua de leitura e cursor ampliado.
- Leitura em voz alta das questões e resoluções (voz do próprio navegador).
- Navegação completa por teclado (`A`–`E`, `Enter`, `O`, `R`) e compatibilidade com leitores de tela, incluindo descrição textual de todas as figuras.
- Verificado com axe-core (critérios WCAG 2.1 A/AA).

## Arquivos do repositório

| Arquivo | Função |
|---|---|
| `index.html` | O aplicativo completo (página única). |
| `questionar-enem.js` | Imagens das questões oficiais do ENEM (≈ 9 MB). Carregado apenas quando o aluno escolhe questões do ENEM. **Deve ficar na mesma pasta do `index.html`.** |
| `apps-script/receber-resultados.gs` | Script do Google Apps Script para receber automaticamente os resultados das competições em uma Planilha Google (instruções no próprio arquivo). |
| `LICENSE.md` | Licença de uso. |

## Recebimento automático de resultados (opcional)

1. Crie uma Planilha Google e abra **Extensões > Apps Script**.
2. Cole o conteúdo de `apps-script/receber-resultados.gs` e salve.
3. **Implantar > Nova implantação > App da Web** — executar como *Eu*, acesso *Qualquer pessoa*.
4. Copie a URL (termina em `/exec`) e coloque-a em `const RECEBIMENTO_URL='…'` no `index.html`.

Os resultados chegam à aba **Resultados** da planilha. No ranking, o professor digita o código da competição e clica em **☁ Buscar resultados recebidos**; cada professor só acessa a competição cujo código conhece. Sem a URL, o app funciona normalmente com envio manual dos códigos de resultado.

## Privacidade

- Não há login nem cadastro. O nome digitado pelo aluno fica no próprio navegador.
- Histórico e preferências ficam apenas no navegador do aparelho (`localStorage`).
- Nas competições, quando o recebimento automático está ativo, são enviados à planilha do professor: nome, código da competição, acertos, tempo e código de resultado.
- O site usa o GoatCounter para contar visitas, sem cookies e sem identificar pessoas.

## Fontes

- Questões oficiais: Exame Nacional do Ensino Médio (ENEM) 2022, 2023, 2024 e 2025 — provas e gabaritos do 2º dia, Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira (INEP). Questões anuladas não foram incluídas.
- As questões similares são originais do Questionar, inspiradas nos assuntos e no formato do ENEM.

## Contato

- YouTube: [youtube.com/@ProfOswy](https://youtube.com/@ProfOswy)
- E-mail: profoswy@gmail.com
- Instagram: rodrigo.osw

---

*“Cada questão que você resolve hoje é um passo a mais em direção ao futuro que você escolher.”*
