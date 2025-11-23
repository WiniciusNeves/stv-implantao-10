export interface Condominio {
  id: string;
  // Monitoramento
  nomeCondominio: string;
  linkCadastro: string;
  status: 'NÃO INICIADA' | 'EM ANDAMENTO' | 'CONCLUÍDA';
  ramais: string[];
  cftv: 'CONCLUÍDO' | 'EM ANDAMENTO' | 'AGUARDANDO TÉCNICA';
  contaSituator: string;
  configuracaoSituator: 'CONCLUÍDO' | 'EM ANDAMENTO' | 'AGUARDANDO TÉCNICA';
  licencas: 'CONCLUÍDO' | 'SOLICITADAS';
  appStv: 'CONCLUÍDO' | 'EM ANDAMENTO';
  dataImplantacao: string;
  dispositivosAcesso: string[]; // Tag veicular, Tag pedestre, Controles, Facial
  observacoes: string;
  
  // Técnica
  vistorias: 'NÃO INICIADA' | 'EM ANDAMENTO' | 'CONCLUÍDA';
  parametrizacao: 'CONCLUÍDO' | 'A FAZER';
  instalacao: 'CONCLUÍDA' | 'EM ANDAMENTO';
  testesTecnico: 'CONCLUÍDO' | 'EM ANDAMENTO';
  entregaInstrucao: FileData[];
  
  // Metadata
  criadoEm: string;
  atualizadoEm: string;
  criadoPor: string;
}

export interface FileData {
  id: string;
  name: string;
  url: string;
  uploadedAt: string;
  uploadedBy: string;
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