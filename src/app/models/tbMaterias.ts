export interface tbMaterias {
    mat_Id: number;
    mat_Nombre: string;
    dur_Id: number;
    mat_EsActivo: boolean | null;
    mat_EsEliminado: boolean;
    mat_UsuarioRegistra: number;
    mat_FechaRegistra: string;
    mat_UsuarioModifica: number | null;
    mat_FechaModifica: string | null;
}