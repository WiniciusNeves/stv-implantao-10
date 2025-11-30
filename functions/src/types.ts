export interface FileData {
  id: string;
  name: string;
  url: string;
  uploadedAt: string;
  uploadedBy: string;
}

export interface Condominio {
  id: string;
  nomeCondominio: string;
  linkCadastro: string;
  status: "NÃO INICIADA" | "EM ANDAMENTO" | "CONCLUÍDA";
  ramais: string[];
  cftv: "CONCLUÍDO" | "EM ANDAMENTO" | "AGUARDANDO TÉCNICA";
  contaSituator: string;
  configuracaoSituator: "CONCLUÍDO" | "EM ANDAMENTO" | "AGUARDANDO TÉCNICA";
  licencas: "CONCLUÍDO" | "SOLICITADAS";
  appStv: "CONCLUÍDO" | "EM ANDAMENTO";
  dataImplantacao: string;
  dispositivosAcesso: string[];
  observacoes: string;
  vistorias: "NÃO INICIADA" | "EM ANDAMENTO" | "CONCLUÍDA";
  parametrizacao: "CONCLUÍDO" | "A FAZER";
  instalacao: "CONCLUÍDA" | "EM ANDAMENTO";
  testesTecnico: "CONCLUÍDO" | "EM ANDAMENTO";
  entregaInstrucao: FileData[];
  criadoEm: string;
  atualizadoEm: string;
  criadoPor: string;
}

export interface HistoricoItem {
  id: string;
  condominioId: string;
  condominioNome: string;
  usuario: string;
  acao: string;
  campo: string;
  valorAnterior: string;
  valorNovo: string;
  dataHora: string;
}

export interface Backup extends Condominio {
  originalId: string;
  backupDate: string;
}
// types.ts
export interface User {
  uid: string;
  email: string | null;
  username: string; // ou displayName
  role?: "ADM" | "MONITORAMENTO" | "TECNICO" | "ANALISADOR"; // <--- Adicione isso
}