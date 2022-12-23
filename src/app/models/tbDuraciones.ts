export interface tbDuraciones {
    dur_Id: number;
    dur_Descripcion: string;
    dur_EsEliminado: boolean;
    dur_UsuarioRegistra: number;
    dur_FechaRegistra: string;
    dur_UsuarioModifica: number | null;
    dur_FechaModifica: string | null;
}