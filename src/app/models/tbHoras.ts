export interface tbHoras {
    hor_Id: number;
    hor_Hora: string;
    hor_EsEliminado: boolean;
    hor_UsuarioRegistra: number;
    hor_FechaRegistra: string;
    hor_UsuarioModifica: number | null;
    hor_FechaModifica: string | null;
}