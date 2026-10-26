/**
 * QUESTIONAR — Recebimento automático de resultados
 * Prof. Me. Rodrigo Gonçalves (Prof Oswy) · em parceria com o Colégio INTEGRADO
 *
 * COMO INSTALAR (uma vez só):
 * 1. Crie uma Planilha Google (ex.: "Questionar — Resultados").
 * 2. Menu Extensões > Apps Script. Apague o conteúdo e cole este arquivo inteiro. Salve.
 * 3. Clique em Implantar > Nova implantação > tipo "App da Web".
 *      Executar como: Eu
 *      Quem pode acessar: Qualquer pessoa
 *    Autorize o acesso quando o Google pedir.
 * 4. Copie a URL gerada (termina em /exec).
 * 5. No Questionar.html, no início do bloco de script, cole a URL em:
 *      const RECEBIMENTO_URL='https://script.google.com/macros/s/..../exec';
 *    e publique o HTML atualizado no GitHub.
 *
 * Se alterar este script depois, use Implantar > Gerenciar implantações > Editar > Nova versão
 * (assim a URL continua a mesma).
 */

const ABA = 'Resultados';
const CABECALHO = ['Recebido em', 'Competição', 'Nome', 'Acertos', 'Total', 'Tempo (s)', 'Código de resultado'];

function planilha_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(ABA);
  if (!sh) {
    sh = ss.insertSheet(ABA);
    sh.appendRow(CABECALHO);
    sh.setFrozenRows(1);
  }
  return sh;
}

/* O aluno envia o resultado ao terminar a competição */
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(15000); // evita conflito quando vários alunos terminam juntos
  try {
    const d = JSON.parse(e.postData.contents);
    const code = String(d.code || '').toUpperCase().slice(0, 40);
    const result = String(d.result || '');
    if (!code || result.indexOf('R-') !== 0 || result.length > 2000) {
      return ContentService.createTextOutput('ignorado');
    }
    planilha_().appendRow([
      new Date(), code, String(d.nome || '').slice(0, 60),
      Number(d.a) || 0, Number(d.t) || 0, (Number(d.ms) || 0) / 1000, result
    ]);
    return ContentService.createTextOutput('ok');
  } finally {
    lock.releaseLock();
  }
}

/* O painel de ranking do professor busca os códigos recebidos.
   Exige ?code=M-ABC-10-12345-K: cada professor só vê a competição cujo código conhece. */
function doGet(e) {
  const filtro = String((e && e.parameter && e.parameter.code) || '').toUpperCase();
  // Só devolve resultados de uma competição específica: o código funciona como chave de acesso.
  if (!filtro) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, erro: 'informe ?code=' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  const linhas = planilha_().getDataRange().getValues().slice(1);
  const resultados = linhas
    .filter(r => r[1] === filtro)
    .map(r => r[6]);
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, total: resultados.length, resultados }))
    .setMimeType(ContentService.MimeType.JSON);
}
