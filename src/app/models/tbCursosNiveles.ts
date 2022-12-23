export interface tbCursosNiveles {
    cun_Id: number;
    cun_Descripcion: string;
    niv_Id: number;
    cun_EsEliminado: boolean;
    cun_UsuarioRegistra: number;
    cun_FechaRegistra: string;
    cun_UsuarioModifica: number | null;
    cun_FechaModifica: string | null;
}