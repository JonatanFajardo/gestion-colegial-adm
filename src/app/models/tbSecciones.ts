export interface tbSecciones {
    sec_Id: number;
    sec_Descripcion: string;
    sec_EsEliminado: boolean;
    sec_UsuarioRegistra: number;
    sec_FechaRegistra: string;
    sec_UsuarioModifica: number | null;
    sec_FechaModifica: string | null;
}