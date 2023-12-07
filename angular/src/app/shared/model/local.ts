export interface Local{
    evento:{id: string} | null
    id: string | null;
    cep: string | null;
    uf: string | null;
    cidade: string | null;
    bairro: string | null;
    endereco: string | null;
    numero: number | null;
    lng: number | null;
    lat: number | null;
    habilitado: boolean | null;
}