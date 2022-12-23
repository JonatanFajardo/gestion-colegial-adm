export interface tbParciales {
    pac_Id: number;
    pac_Descripcion: string;
    pac_EsEliminado: boolean;
    pac_UsuarioRegistra: number;
    pac_FechaRegistra: string;
    pac_UsuarioModifica: number | null;
    pac_FechaModifica: string | null;
}