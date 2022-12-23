export interface tbAulas {
    aul_Id: number;
    aul_Descripcion: string;
    aul_EsEliminado: boolean;
    aul_UsuarioRegistra: number;
    aul_FechaRegistra: string;
    aul_UsuarioModifica: number | null;
    aul_FechaModifica: string | null;
}