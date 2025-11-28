import { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { 
  Save, X, Car, User, Radio, Scan, Plus, 
  Circle, Clock, CheckCircle2, AlertCircle, 
  Video, Settings, Shield, Smartphone, 
  ClipboardCheck, Wrench, HardHat, TestTube, Upload, Trash2
} from 'lucide-react';

interface CondominioFormProps {
  condominio: Condominio | null;
  onSave: (condominio: Condominio, changes?: { campo: string; valorAnterior: string; valorNovo: string }[]) => void;
  onCancel: () => void;
}

type TabType = 'monitoramento' | 'tecnica';

export function CondominioForm({ condominio, onSave, onCancel }: CondominioFormProps) {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<TabType>('monitoramento');
  const [originalData, setOriginalData] = useState<Condominio | null>(null);
  
  // Estados do formulário
  const [nomeCondominio, setNomeCondominio] = useState('');
  const [linkCadastro, setLinkCadastro] = useState('');
  const [status, setStatus] = useState<Condominio['status']>('NÃO INICIADA');
  const [ramais, setRamais] = useState<string[]>(['']);
  const [cftv, setCftv] = useState<Condominio['cftv']>('EM ANDAMENTO');
  const [contaSituator, setContaSituator] = useState('');
  const [configuracaoSituator, setConfiguracaoSituator] = useState<Condominio['configuracaoSituator']>('EM ANDAMENTO');
  const [licencas, setLicencas] = useState<Condominio['licencas']>('SOLICITADAS');
  const [appStv, setAppStv] = useState<Condominio['appStv']>('EM ANDAMENTO');
  const [dataImplantacao, setDataImplantacao] = useState('');
  const [dispositivosAcesso, setDispositivosAcesso] = useState<string[]>([]);
  const [observacoes, setObservacoes] = useState('');

  // Estados técnica
  const [vistorias, setVistorias] = useState<Condominio['vistorias']>('NÃO INICIADA');
  const [parametrizacao, setParametrizacao] = useState<Condominio['parametrizacao']>('A FAZER');
  const [instalacao, setInstalacao] = useState<Condominio['instalacao']>('EM ANDAMENTO');
  const [testesTecnico, setTestesTecnico] = useState<Condominio['testesTecnico']>('EM ANDAMENTO');
  const [entregaInstrucao, setEntregaInstrucao] = useState<FileData[]>([]);

  useEffect(() => {
    if (condominio) {
      setOriginalData(condominio);
      setNomeCondominio(condominio.nomeCondominio);
      setLinkCadastro(condominio.linkCadastro);
      setStatus(condominio.status);
      setRamais(condominio.ramais.length > 0 ? condominio.ramais : ['']);
      setCftv(condominio.cftv);
      setContaSituator(condominio.contaSituator);
      setConfiguracaoSituator(condominio.configuracaoSituator);
      setLicencas(condominio.licencas);
      setAppStv(condominio.appStv);
      setDataImplantacao(condominio.dataImplantacao);
      setDispositivosAcesso(condominio.dispositivosAcesso);
      setObservacoes(condominio.observacoes);
      setVistorias(condominio.vistorias);
      setParametrizacao(condominio.parametrizacao);
      setInstalacao(condominio.instalacao);
      setTestesTecnico(condominio.testesTecnico);
      setEntregaInstrucao(condominio.entregaInstrucao);
    }
  }, [condominio]);

  const canEditMonitoramento = user?.role === 'ADM' || user?.role === 'MONITORAMENTO';
  const canEditTecnica = user?.role === 'ADM' || user?.role === 'TECNICO';
  const canEdit = user?.role !== 'ANALISADOR'; // Pode salvar se não for ANALISADOR

  const handleAddRamal = () => {
    setRamais([...ramais, '']);
  };

  const handleRemoveRamal = (index: number) => {
    setRamais(ramais.filter((_, i) => i !== index));
  };

  const handleRamalChange = (index: number, value: string) => {
    const newRamais = [...ramais];
    newRamais[index] = value;
    setRamais(newRamais);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && user) {
      const newFiles: FileData[] = Array.from(files).map(file => ({
        id: `file-${Date.now()}-${Math.random()}`,
        name: file.name,
        url: URL.createObjectURL(file),
        uploadedAt: new Date().toISOString(),
        uploadedBy: user.username,
      }));
      setEntregaInstrucao([...entregaInstrucao, ...newFiles]);
    }
  };

  const handleRemoveFile = (id: string) => {
    setEntregaInstrucao(entregaInstrucao.filter(f => f.id !== id));
  };

  const detectChanges = (): { campo: string; valorAnterior: string; valorNovo: string }[] => {
    if (!originalData) return [];
    
    const changes: { campo: string; valorAnterior: string; valorNovo: string }[] = [];
    
    const compareField = (field: string, oldVal: any, newVal: any) => {
      const oldStr = Array.isArray(oldVal) ? oldVal.join(', ') : String(oldVal || '');
      const newStr = Array.isArray(newVal) ? newVal.join(', ') : String(newVal || '');
      
      if (oldStr !== newStr) {
        changes.push({
          campo: field,
          valorAnterior: oldStr,
          valorNovo: newStr,
        });
      }
    };

    compareField('Nome do Condomínio', originalData.nomeCondominio, nomeCondominio);
    compareField('Link de Cadastro', originalData.linkCadastro, linkCadastro);
    compareField('Status', originalData.status, status);
    compareField('Ramais', originalData.ramais, ramais.filter(r => r.trim()));
    compareField('CFTV', originalData.cftv, cftv);
    compareField('Conta Situator', originalData.contaSituator, contaSituator);
    compareField('Configuração Situator', originalData.configuracaoSituator, configuracaoSituator);
    compareField('Licenças', originalData.licencas, licencas);
    compareField('App STV', originalData.appStv, appStv);
    compareField('Data Implantação', originalData.dataImplantacao, dataImplantacao);
    compareField('Dispositivos de Acesso', originalData.dispositivosAcesso, dispositivosAcesso);
    compareField('Observações', originalData.observacoes, observacoes);
    compareField('Vistorias', originalData.vistorias, vistorias);
    compareField('Parametrização', originalData.parametrizacao, parametrizacao);
    compareField('Instalação', originalData.instalacao, instalacao);
    compareField('Testes Técnico', originalData.testesTecnico, testesTecnico);

    return changes;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nomeCondominio.trim()) {
      alert('Por favor, preencha o nome do condomínio');
      return;
    }

    const condominioData: Condominio = {
      id: condominio?.id || `cond-${Date.now()}`,
      nomeCondominio,
      linkCadastro,
      status,
      ramais: ramais.filter(r => r.trim()),
      cftv,
      contaSituator,
      configuracaoSituator,
      licencas,
      appStv,
      dataImplantacao,
      dispositivosAcesso,
      observacoes,
      vistorias,
      parametrizacao,
      instalacao,
      testesTecnico,
      entregaInstrucao,
      criadoEm: condominio?.criadoEm || new Date().toISOString(),
      atualizadoEm: new Date().toISOString(),
      criadoPor: condominio?.criadoPor || user?.username || '',
    };

    const changes = condominio ? detectChanges() : undefined;
    onSave(condominioData, changes);
  };

  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-emerald-100 dark:border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-600 dark:to-teal-700 p-6 flex items-center justify-between">
            <div>
              <h2 className="text-white">
                {condominio ? 'Editar Condomínio' : 'Novo Condomínio'}
              </h2>
              {user?.role === 'ANALISADOR' && (
                <p className="text-emerald-100 text-sm mt-1">
                  Modo visualização - Sem permissão de edição
                </p>
              )}
              {user?.role === 'MONITORAMENTO' && activeTab === 'tecnica' && (
                <p className="text-emerald-100 text-sm mt-1">
                  Modo visualização - Edição permitida apenas na aba Monitoramento
                </p>
              )}
              {user?.role === 'TECNICO' && activeTab === 'monitoramento' && (
                <p className="text-emerald-100 text-sm mt-1">
                  Modo visualização - Edição permitida apenas na aba Técnica
                </p>
              )}
            </div>
            <button
              onClick={onCancel}
              className="p-2 text-white hover:bg-white/20 rounded-lg transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Tabs */}
          <div className="border-b border-emerald-100 dark:border-gray-700 bg-emerald-50 dark:bg-gray-700/50">
            <div className="flex">
              <button
                onClick={() => setActiveTab('monitoramento')}
                className={`flex-1 px-6 py-4 transition-all ${
                  activeTab === 'monitoramento'
                    ? 'bg-white dark:bg-gray-800 text-emerald-700 dark:text-emerald-400 border-b-2 border-emerald-500 dark:border-emerald-400'
                    : 'text-emerald-600 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-gray-600'
                }`}
              >
                Monitoramento
              </button>
              <button
                onClick={() => setActiveTab('tecnica')}
                className={`flex-1 px-6 py-4 transition-all ${
                  activeTab === 'tecnica'
                    ? 'bg-white dark:bg-gray-800 text-emerald-700 dark:text-blue-400 border-b-2 border-emerald-500 dark:border-blue-400'
                    : 'text-emerald-600 dark:text-blue-300 hover:bg-emerald-100 dark:hover:bg-gray-600'
                }`}
              >
                Técnica
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="p-6 max-h-[calc(100vh-300px)] overflow-y-auto">
              {/* Tab Monitoramento */}
              {activeTab === 'monitoramento' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-emerald-900 dark:text-emerald-100 mb-2">
                        Nome do Condomínio *
                      </label>
                      <input
                        type="text"
                        value={nomeCondominio}
                        onChange={(e) => setNomeCondominio(e.target.value)}
                        disabled={!canEditMonitoramento}
                        className="w-full px-4 py-3 border border-emerald-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 disabled:bg-gray-50 dark:disabled:bg-gray-700 disabled:text-gray-500 dark:disabled:text-gray-400 dark:bg-gray-700 dark:text-gray-100"
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-emerald-900 dark:text-emerald-100 mb-2">
                        Link de Cadastro
                      </label>
                      <input
                        type="url"
                        value={linkCadastro}
                        onChange={(e) => setLinkCadastro(e.target.value)}
                        disabled={!canEditMonitoramento}
                        className="w-full px-4 py-3 border border-emerald-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 disabled:bg-gray-50 dark:disabled:bg-gray-700 disabled:text-gray-500 dark:disabled:text-gray-400 dark:bg-gray-700 dark:text-gray-100"
                        placeholder="https://"
                      />
                    </div>

                    <div>
                      <label className="block text-emerald-900 dark:text-emerald-100 mb-3">
                        Status
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { value: 'NÃO INICIADA', label: 'Não Iniciada', icon: Circle },
                          { value: 'EM ANDAMENTO', label: 'Em Andamento', icon: Clock },
                          { value: 'CONCLUÍDA', label: 'Concluída', icon: CheckCircle2 }
                        ].map(({ value, label, icon: Icon }) => {
                          const isSelected = status === value;
                          return (
                            <button
                              key={value}
                              type="button"
                              onClick={() => canEditMonitoramento && setStatus(value as Condominio['status'])}
                              disabled={!canEditMonitoramento}
                              className={`relative flex flex-col items-center gap-1.5 px-3 py-3 rounded-xl transition-all duration-300 group overflow-hidden ${
                                isSelected
                                  ? 'bg-gradient-to-br from-[#7BD955] via-[#0a6c45] to-emerald-700 shadow-lg shadow-[#0a6c45]/40 scale-105 border-2 border-white/30'
                                  : 'bg-white/60 backdrop-blur-sm border-2 border-emerald-200/50 hover:border-[#7BD955] hover:shadow-md hover:scale-105'
                              } ${!canEditMonitoramento ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                            >
                              {isSelected && (
                                <div className="absolute inset-0 bg-gradient-to-br from-[#7BD955]/20 via-yellow-300/20 to-[#0a6c45]/20 animate-pulse pointer-events-none"></div>
                              )}
                              <Icon className={`w-5 h-5 relative z-10 ${isSelected ? 'text-white drop-shadow-lg' : 'text-[#0a6c45] group-hover:scale-110'}`} strokeWidth={2.5} />
                              <span className={`text-[10px] text-center relative z-10 ${isSelected ? 'text-white drop-shadow-sm' : 'text-emerald-900'}`}>{label}</span>
                              {isSelected && (
                                <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-md z-10 animate-[scaleIn_0.3s_ease-out]">
                                  <svg className="w-2.5 h-2.5 text-[#0a6c45]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M5 13l4 4L19 7"></path>
                                  </svg>
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-emerald-900 dark:text-emerald-100 mb-2">
                        Conta do Situator
                      </label>
                      <input
                        type="text"
                        value={contaSituator}
                        onChange={(e) => setContaSituator(e.target.value)}
                        disabled={!canEditMonitoramento}
                        className="w-full px-4 py-3 border border-emerald-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 disabled:bg-gray-50 dark:disabled:bg-gray-700 disabled:text-gray-500 dark:disabled:text-gray-400 dark:bg-gray-700 dark:text-gray-100"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-emerald-900 dark:text-emerald-100 mb-2">
                        Ramais
                      </label>
                      {ramais.map((ramal, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                          <input
                            type="text"
                            value={ramal}
                            onChange={(e) => handleRamalChange(index, e.target.value)}
                            disabled={!canEditMonitoramento}
                            className="flex-1 px-4 py-3 border border-emerald-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 disabled:bg-gray-50 dark:disabled:bg-gray-700 disabled:text-gray-500 dark:disabled:text-gray-400 dark:bg-gray-700 dark:text-gray-100"
                            placeholder={`Ramal ${index + 1}`}
                          />
                          {canEditMonitoramento && ramais.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveRamal(index)}
                              className="p-3 text-red-600 hover:bg-red-50 rounded-xl transition-all"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          )}
                        </div>
                      ))}
                      {canEditMonitoramento && (
                        <button
                          type="button"
                          onClick={handleAddRamal}
                          className="flex items-center gap-2 px-4 py-2 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Adicionar Ramal</span>
                        </button>
                      )}
                    </div>

                    <div>
                      <label className="block text-emerald-900 dark:text-emerald-100 mb-3">
                        CFTV
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { value: 'CONCLUÍDO', label: 'Concluído', icon: CheckCircle2 },
                          { value: 'EM ANDAMENTO', label: 'Em Andamento', icon: Clock },
                          { value: 'AGUARDANDO TÉCNICA', label: 'Aguard. Técnica', icon: AlertCircle }
                        ].map(({ value, label, icon: Icon }) => {
                          const isSelected = cftv === value;
                          return (
                            <button
                              key={value}
                              type="button"
                              onClick={() => canEditMonitoramento && setCftv(value as Condominio['cftv'])}
                              disabled={!canEditMonitoramento}
                              className={`relative flex flex-col items-center gap-1.5 px-2 py-3 rounded-xl transition-all duration-300 group overflow-hidden ${
                                isSelected
                                  ? 'bg-gradient-to-br from-[#7BD955] via-[#0a6c45] to-emerald-700 shadow-lg shadow-[#0a6c45]/40 scale-105 border-2 border-white/30'
                                  : 'bg-white/60 backdrop-blur-sm border-2 border-emerald-200/50 hover:border-[#7BD955] hover:shadow-md hover:scale-105'
                              } ${!canEditMonitoramento ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                            >
                              {isSelected && (
                                <div className="absolute inset-0 bg-gradient-to-br from-[#7BD955]/20 via-yellow-300/20 to-[#0a6c45]/20 animate-pulse pointer-events-none"></div>
                              )}
                              <Icon className={`w-5 h-5 relative z-10 ${isSelected ? 'text-white drop-shadow-lg' : 'text-[#0a6c45] group-hover:scale-110'}`} strokeWidth={2.5} />
                              <span className={`text-[10px] text-center relative z-10 ${isSelected ? 'text-white drop-shadow-sm' : 'text-emerald-900'}`}>{label}</span>
                              {isSelected && (
                                <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-md z-10 animate-[scaleIn_0.3s_ease-out]">
                                  <svg className="w-2.5 h-2.5 text-[#0a6c45]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M5 13l4 4L19 7"></path>
                                  </svg>
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-emerald-900 dark:text-emerald-100 mb-3">
                        Configuração do Situator
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { value: 'CONCLUÍDO', label: 'Concluído', icon: CheckCircle2 },
                          { value: 'EM ANDAMENTO', label: 'Em Andamento', icon: Clock },
                          { value: 'AGUARDANDO TÉCNICA', label: 'Aguard. Técnica', icon: AlertCircle }
                        ].map(({ value, label, icon: Icon }) => {
                          const isSelected = configuracaoSituator === value;
                          return (
                            <button
                              key={value}
                              type="button"
                              onClick={() => canEditMonitoramento && setConfiguracaoSituator(value as Condominio['configuracaoSituator'])}
                              disabled={!canEditMonitoramento}
                              className={`relative flex flex-col items-center gap-1.5 px-2 py-3 rounded-xl transition-all duration-300 group overflow-hidden ${
                                isSelected
                                  ? 'bg-gradient-to-br from-[#7BD955] via-[#0a6c45] to-emerald-700 shadow-lg shadow-[#0a6c45]/40 scale-105 border-2 border-white/30'
                                  : 'bg-white/60 backdrop-blur-sm border-2 border-emerald-200/50 hover:border-[#7BD955] hover:shadow-md hover:scale-105'
                              } ${!canEditMonitoramento ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                            >
                              {isSelected && (
                                <div className="absolute inset-0 bg-gradient-to-br from-[#7BD955]/20 via-yellow-300/20 to-[#0a6c45]/20 animate-pulse pointer-events-none"></div>
                              )}
                              <Icon className={`w-5 h-5 relative z-10 ${isSelected ? 'text-white drop-shadow-lg' : 'text-[#0a6c45] group-hover:scale-110'}`} strokeWidth={2.5} />
                              <span className={`text-[10px] text-center relative z-10 ${isSelected ? 'text-white drop-shadow-sm' : 'text-emerald-900'}`}>{label}</span>
                              {isSelected && (
                                <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-md z-10 animate-[scaleIn_0.3s_ease-out]">
                                  <svg className="w-2.5 h-2.5 text-[#0a6c45]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M5 13l4 4L19 7"></path>
                                  </svg>
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-emerald-900 dark:text-emerald-100 mb-3">
                        Licenças
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { value: 'CONCLUÍDO', label: 'Concluído', icon: CheckCircle2 },
                          { value: 'SOLICITADAS', label: 'Solicitadas', icon: Clock }
                        ].map(({ value, label, icon: Icon }) => {
                          const isSelected = licencas === value;
                          return (
                            <button
                              key={value}
                              type="button"
                              onClick={() => canEditMonitoramento && setLicencas(value as Condominio['licencas'])}
                              disabled={!canEditMonitoramento}
                              className={`relative flex flex-col items-center gap-1.5 px-3 py-3 rounded-xl transition-all duration-300 group overflow-hidden ${
                                isSelected
                                  ? 'bg-gradient-to-br from-[#7BD955] via-[#0a6c45] to-emerald-700 shadow-lg shadow-[#0a6c45]/40 scale-105 border-2 border-white/30'
                                  : 'bg-white/60 backdrop-blur-sm border-2 border-emerald-200/50 hover:border-[#7BD955] hover:shadow-md hover:scale-105'
                              } ${!canEditMonitoramento ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                            >
                              {isSelected && (
                                <div className="absolute inset-0 bg-gradient-to-br from-[#7BD955]/20 via-yellow-300/20 to-[#0a6c45]/20 animate-pulse pointer-events-none"></div>
                              )}
                              <Icon className={`w-5 h-5 relative z-10 ${isSelected ? 'text-white drop-shadow-lg' : 'text-[#0a6c45] group-hover:scale-110'}`} strokeWidth={2.5} />
                              <span className={`text-[10px] text-center relative z-10 ${isSelected ? 'text-white drop-shadow-sm' : 'text-emerald-900'}`}>{label}</span>
                              {isSelected && (
                                <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-md z-10 animate-[scaleIn_0.3s_ease-out]">
                                  <svg className="w-2.5 h-2.5 text-[#0a6c45]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M5 13l4 4L19 7"></path>
                                  </svg>
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-emerald-900 dark:text-emerald-100 mb-3">
                        App STV
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { value: 'CONCLUÍDO', label: 'Concluído', icon: CheckCircle2 },
                          { value: 'EM ANDAMENTO', label: 'Em Andamento', icon: Clock }
                        ].map(({ value, label, icon: Icon }) => {
                          const isSelected = appStv === value;
                          return (
                            <button
                              key={value}
                              type="button"
                              onClick={() => canEditMonitoramento && setAppStv(value as Condominio['appStv'])}
                              disabled={!canEditMonitoramento}
                              className={`relative flex flex-col items-center gap-1.5 px-3 py-3 rounded-xl transition-all duration-300 group overflow-hidden ${
                                isSelected
                                  ? 'bg-gradient-to-br from-[#7BD955] via-[#0a6c45] to-emerald-700 shadow-lg shadow-[#0a6c45]/40 scale-105 border-2 border-white/30'
                                  : 'bg-white/60 backdrop-blur-sm border-2 border-emerald-200/50 hover:border-[#7BD955] hover:shadow-md hover:scale-105'
                              } ${!canEditMonitoramento ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                            >
                              {isSelected && (
                                <div className="absolute inset-0 bg-gradient-to-br from-[#7BD955]/20 via-yellow-300/20 to-[#0a6c45]/20 animate-pulse pointer-events-none"></div>
                              )}
                              <Icon className={`w-5 h-5 relative z-10 ${isSelected ? 'text-white drop-shadow-lg' : 'text-[#0a6c45] group-hover:scale-110'}`} strokeWidth={2.5} />
                              <span className={`text-[10px] text-center relative z-10 ${isSelected ? 'text-white drop-shadow-sm' : 'text-emerald-900'}`}>{label}</span>
                              {isSelected && (
                                <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-md z-10 animate-[scaleIn_0.3s_ease-out]">
                                  <svg className="w-2.5 h-2.5 text-[#0a6c45]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M5 13l4 4L19 7"></path>
                                  </svg>
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-emerald-900 dark:text-emerald-100 mb-2">
                        Data para Implantação
                      </label>
                      <input
                        type="date"
                        value={dataImplantacao}
                        onChange={(e) => setDataImplantacao(e.target.value)}
                        disabled={!canEditMonitoramento}
                        className="w-full px-4 py-3 border border-emerald-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 disabled:bg-gray-50 dark:disabled:bg-gray-700 disabled:text-gray-500 dark:disabled:text-gray-400 dark:bg-gray-700 dark:text-gray-100"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-emerald-900 dark:text-emerald-100 mb-3">
                        Dispositivos de Acesso
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                          { name: 'Tag veicular', icon: Car },
                          { name: 'Tag pedestre', icon: User },
                          { name: 'Controles', icon: Radio },
                          { name: 'Facial', icon: Scan }
                        ].map(({ name, icon: Icon }) => {
                          const isSelected = dispositivosAcesso.includes(name);
                          return (
                            <label
                              key={name}
                              className={`relative flex flex-col items-center gap-2 px-4 py-4 rounded-2xl transition-all duration-300 cursor-pointer group overflow-hidden ${
                                isSelected
                                  ? 'bg-gradient-to-br from-[#7BD955] via-[#0a6c45] to-emerald-700 shadow-xl shadow-[#0a6c45]/40 scale-105 border-2 border-white/30'
                                  : 'bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-2 border-emerald-200/50 dark:border-gray-600/50 hover:border-[#7BD955] hover:shadow-lg hover:scale-105'
                              } ${!canEditMonitoramento ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                              {/* Glow effect quando selecionado */}
                              {isSelected && (
                                <div className="absolute inset-0 bg-gradient-to-br from-[#7BD955]/20 via-yellow-300/20 to-[#0a6c45]/20 animate-pulse pointer-events-none"></div>
                              )}
                              
                              {/* Shine effect on hover */}
                              <div className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none ${isSelected ? 'opacity-50' : ''}`}></div>
                              
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setDispositivosAcesso([...dispositivosAcesso, name]);
                                  } else {
                                    setDispositivosAcesso(dispositivosAcesso.filter(d => d !== name));
                                  }
                                }}
                                disabled={!canEditMonitoramento}
                                className="sr-only"
                              />
                              
                              {/* Ícone */}
                              <div className={`relative z-10 transition-all duration-300 ${
                                isSelected 
                                  ? 'text-white drop-shadow-lg scale-110' 
                                  : 'text-[#0a6c45] dark:text-[#7BD955] group-hover:scale-110'
                              }`}>
                                <Icon className="w-7 h-7" strokeWidth={2.5} />
                              </div>
                              
                              {/* Texto */}
                              <span className={`relative z-10 text-center text-sm transition-all duration-300 ${
                                isSelected 
                                  ? 'text-white drop-shadow-sm' 
                                  : 'text-emerald-900 dark:text-emerald-100'
                              }`}>
                                {name}
                              </span>
                              
                              {/* Checkmark quando selecionado */}
                              {isSelected && (
                                <div className="absolute top-2 right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-lg z-10 animate-[scaleIn_0.3s_ease-out]">
                                  <svg className="w-3 h-3 text-[#0a6c45]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M5 13l4 4L19 7"></path>
                                  </svg>
                                </div>
                              )}
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-emerald-900 dark:text-emerald-100 mb-2">
                        Observações
                      </label>
                      <textarea
                        value={observacoes}
                        onChange={(e) => setObservacoes(e.target.value)}
                        disabled={!canEditMonitoramento}
                        rows={4}
                        className="w-full px-4 py-3 border border-emerald-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 disabled:bg-gray-50 dark:disabled:bg-gray-700 disabled:text-gray-500 dark:disabled:text-gray-400 dark:bg-gray-700 dark:text-gray-100"
                        placeholder="Informações adicionais..."
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Tab Técnica */}
              {activeTab === 'tecnica' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-blue-900 dark:text-blue-100 mb-3">
                        Vistorias
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { value: 'NÃO INICIADA', label: 'Não Iniciada', icon: Circle },
                          { value: 'EM ANDAMENTO', label: 'Em Andamento', icon: Clock },
                          { value: 'CONCLUÍDA', label: 'Concluída', icon: CheckCircle2 }
                        ].map(({ value, label, icon: Icon }) => {
                          const isSelected = vistorias === value;
                          return (
                            <button
                              key={value}
                              type="button"
                              onClick={() => canEditTecnica && setVistorias(value as Condominio['vistorias'])}
                              disabled={!canEditTecnica}
                              className={`relative flex flex-col items-center gap-1.5 px-3 py-3 rounded-xl transition-all duration-300 group overflow-hidden ${
                                isSelected
                                  ? 'bg-gradient-to-br from-[#7BD955] via-[#0a6c45] to-emerald-700 shadow-lg shadow-emerald-600/40 scale-105 border-2 border-white/30'
                                  : 'bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm border-2 border-emerald-200/50 dark:border-gray-600/50 hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-md hover:scale-105'
                              } ${!canEditTecnica ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                            >
                              {isSelected && (
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/20 via-[#7BD955]/20 to-emerald-700/20 animate-pulse pointer-events-none"></div>
                              )}
                              <Icon className={`w-5 h-5 relative z-10 ${isSelected ? 'text-white drop-shadow-lg' : 'text-[#0a6c45] dark:text-[#7BD955] group-hover:scale-110'}`} strokeWidth={2.5} />
                              <span className={`text-[10px] text-center relative z-10 ${isSelected ? 'text-white drop-shadow-sm' : 'text-[#0a6c45] dark:text-[#7BD955]'}`}>{label}</span>
                              {isSelected && (
                                <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-md z-10 animate-[scaleIn_0.3s_ease-out]">
                                  <svg className="w-2.5 h-2.5 text-[#0a6c45]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M5 13l4 4L19 7"></path>
                                  </svg>
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-blue-900 dark:text-blue-100 mb-3">
                        Parametrização
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { value: 'CONCLUÍDO', label: 'Concluído', icon: CheckCircle2 },
                          { value: 'A FAZER', label: 'A Fazer', icon: Circle }
                        ].map(({ value, label, icon: Icon }) => {
                          const isSelected = parametrizacao === value;
                          return (
                            <button
                              key={value}
                              type="button"
                              onClick={() => canEditTecnica && setParametrizacao(value as Condominio['parametrizacao'])}
                              disabled={!canEditTecnica}
                              className={`relative flex flex-col items-center gap-1.5 px-3 py-3 rounded-xl transition-all duration-300 group overflow-hidden ${
                                isSelected
                                  ? 'bg-gradient-to-br from-[#7BD955] via-[#0a6c45] to-emerald-700 shadow-lg shadow-emerald-600/40 scale-105 border-2 border-white/30'
                                  : 'bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm border-2 border-emerald-200/50 dark:border-gray-600/50 hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-md hover:scale-105'
                              } ${!canEditTecnica ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                            >
                              {isSelected && (
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/20 via-[#7BD955]/20 to-emerald-700/20 animate-pulse pointer-events-none"></div>
                              )}
                              <Icon className={`w-5 h-5 relative z-10 ${isSelected ? 'text-white drop-shadow-lg' : 'text-[#0a6c45] dark:text-[#7BD955] group-hover:scale-110'}`} strokeWidth={2.5} />
                              <span className={`text-[10px] text-center relative z-10 ${isSelected ? 'text-white drop-shadow-sm' : 'text-[#0a6c45] dark:text-[#7BD955]'}`}>{label}</span>
                              {isSelected && (
                                <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-md z-10 animate-[scaleIn_0.3s_ease-out]">
                                  <svg className="w-2.5 h-2.5 text-[#0a6c45]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M5 13l4 4L19 7"></path>
                                  </svg>
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-blue-900 dark:text-blue-100 mb-3">
                        Instalação
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { value: 'CONCLUÍDA', label: 'Concluída', icon: CheckCircle2 },
                          { value: 'EM ANDAMENTO', label: 'Em Andamento', icon: Clock }
                        ].map(({ value, label, icon: Icon }) => {
                          const isSelected = instalacao === value;
                          return (
                            <button
                              key={value}
                              type="button"
                              onClick={() => canEditTecnica && setInstalacao(value as Condominio['instalacao'])}
                              disabled={!canEditTecnica}
                              className={`relative flex flex-col items-center gap-1.5 px-3 py-3 rounded-xl transition-all duration-300 group overflow-hidden ${
                                isSelected
                                  ? 'bg-gradient-to-br from-[#7BD955] via-[#0a6c45] to-emerald-700 shadow-lg shadow-emerald-600/40 scale-105 border-2 border-white/30'
                                  : 'bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm border-2 border-emerald-200/50 dark:border-gray-600/50 hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-md hover:scale-105'
                              } ${!canEditTecnica ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                            >
                              {isSelected && (
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/20 via-[#7BD955]/20 to-emerald-700/20 animate-pulse pointer-events-none"></div>
                              )}
                              <Icon className={`w-5 h-5 relative z-10 ${isSelected ? 'text-white drop-shadow-lg' : 'text-[#0a6c45] dark:text-[#7BD955] group-hover:scale-110'}`} strokeWidth={2.5} />
                              <span className={`text-[10px] text-center relative z-10 ${isSelected ? 'text-white drop-shadow-sm' : 'text-[#0a6c45] dark:text-[#7BD955]'}`}>{label}</span>
                              {isSelected && (
                                <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-md z-10 animate-[scaleIn_0.3s_ease-out]">
                                  <svg className="w-2.5 h-2.5 text-[#0a6c45]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M5 13l4 4L19 7"></path>
                                  </svg>
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-blue-900 dark:text-blue-100 mb-3">
                        Testes Técnico
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { value: 'CONCLUÍDO', label: 'Concluído', icon: CheckCircle2 },
                          { value: 'EM ANDAMENTO', label: 'Em Andamento', icon: Clock }
                        ].map(({ value, label, icon: Icon }) => {
                          const isSelected = testesTecnico === value;
                          return (
                            <button
                              key={value}
                              type="button"
                              onClick={() => canEditTecnica && setTestesTecnico(value as Condominio['testesTecnico'])}
                              disabled={!canEditTecnica}
                              className={`relative flex flex-col items-center gap-1.5 px-3 py-3 rounded-xl transition-all duration-300 group overflow-hidden ${
                                isSelected
                                  ? 'bg-gradient-to-br from-[#7BD955] via-[#0a6c45] to-emerald-700 shadow-lg shadow-emerald-600/40 scale-105 border-2 border-white/30'
                                  : 'bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm border-2 border-emerald-200/50 dark:border-gray-600/50 hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-md hover:scale-105'
                              } ${!canEditTecnica ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                            >
                              {isSelected && (
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/20 via-[#7BD955]/20 to-emerald-700/20 animate-pulse pointer-events-none"></div>
                              )}
                              <Icon className={`w-5 h-5 relative z-10 ${isSelected ? 'text-white drop-shadow-lg' : 'text-[#0a6c45] dark:text-[#7BD955] group-hover:scale-110'}`} strokeWidth={2.5} />
                              <span className={`text-[10px] text-center relative z-10 ${isSelected ? 'text-white drop-shadow-sm' : 'text-[#0a6c45] dark:text-[#7BD955]'}`}>{label}</span>
                              {isSelected && (
                                <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-md z-10 animate-[scaleIn_0.3s_ease-out]">
                                  <svg className="w-2.5 h-2.5 text-[#0a6c45]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M5 13l4 4L19 7"></path>
                                  </svg>
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-blue-900 dark:text-blue-100 mb-2">
                        Entrega de Instrução dos Equipamentos
                      </label>
                      
                      {entregaInstrucao.length > 0 && (
                        <div className="mb-4 space-y-2">
                          {entregaInstrucao.map((file) => (
                            <div key={file.id} className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-xl">
                              <div className="flex-1">
                                <p className="text-blue-900">{file.name}</p>
                                <p className="text-blue-600">
                                  Enviado por {file.uploadedBy} em {new Date(file.uploadedAt).toLocaleString('pt-BR')}
                                </p>
                              </div>
                              {canEditTecnica && (
                                <button
                                  type="button"
                                  onClick={() => handleRemoveFile(file.id)}
                                  className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-all"
                                >
                                  <Trash2 className="w-5 h-5" />
                                </button>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {!canEditTecnica && entregaInstrucao.length === 0 && (
                        <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl text-center text-gray-500">
                          Nenhum arquivo enviado ainda
                        </div>
                      )}

                      {canEditTecnica && (
                        <label className="flex items-center justify-center gap-2 px-4 py-8 border-2 border-dashed border-blue-300 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer">
                          <Upload className="w-6 h-6 text-blue-600" />
                          <span className="text-blue-600">Clique para adicionar arquivos</span>
                          <input
                            type="file"
                            multiple
                            onChange={handleFileUpload}
                            className="hidden"
                            accept="image/*,.pdf,.doc,.docx"
                          />
                        </label>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-emerald-100 dark:border-gray-700 p-6 bg-emerald-50 dark:bg-gray-700/50 flex justify-end gap-4">
              <button
                type="button"
                onClick={onCancel}
                className="px-6 py-3 border border-emerald-300 dark:border-gray-600 text-emerald-700 dark:text-emerald-300 rounded-xl hover:bg-emerald-100 dark:hover:bg-gray-600 transition-all"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-600 dark:to-teal-700 text-white rounded-xl hover:from-emerald-600 hover:to-teal-700 dark:hover:from-emerald-700 dark:hover:to-teal-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Save className="w-5 h-5" />
                <span>Salvar</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}