export interface tbCursos {
    cur_Id: number;
    cur_Nombre: string;
    niv_Id: number;
    cur_EsActivo: boolean | null;
    cur_EsEliminado: boolean;
    cur_UsuarioRegistra: number;
    cur_FechaRegistra: string;
    cur_UsuarioModifica: number | null;
    cur_FechaModifica: string | null;
}