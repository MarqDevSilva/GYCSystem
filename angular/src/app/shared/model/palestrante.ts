export interface Palestrante{
  evento:{
    id: string;
  }
  id: string | null;
  nome:  string |  null;
  descricao:  string |  null;
  img: number[] | string | null
}
