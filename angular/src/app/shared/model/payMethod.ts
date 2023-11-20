export interface payMethod{
  evento:{
    id: string;
  }
  id: string | null;
  pix: string | null;
  cartao: string | null;
  cartaoParcelamento: string | null;
  boleto: string | null;
  boletoParcelamento: string | null;
}
