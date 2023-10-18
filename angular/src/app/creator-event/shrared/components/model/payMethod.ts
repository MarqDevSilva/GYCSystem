export interface payMethod{
  evento:{
    id: string | null
  }
  pix: string | null;
  cartaoAVista: string | null;
  cartaoAPrazo: string | null;
  cartaoAPrazoTaxado: string | null;
  boletoAVista: string | null;
  boletoAPrazo: string | null;
  boletoAPrazoTaxado: string | null;
}
