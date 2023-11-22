export interface Evento{
  id: string | null;
  nomeEvento: string | null;
  maxInscricoes: string | null;
  whatsapp: string | null;
  dataInicial: Date;
  dataFinal: Date;
  status: string | null;
}
