export interface Palestrante{
  evento:{
    id: string;
  }
  nome:  string |  null;
  descricao:  string |  null;
  img: number[];
  preview:  string |  null;
}
