export interface form{
  evento:{
    id: string | null;
  }
  id: string | null;
  type: string | null;
  ask: string | null;
  required: boolean | null;
  options: string [] | null;
  onAdd: string | null;
}
