export interface tbHorarioProfesores {
    hoPr_Id: number;
    cur_Id: number;
    cun_Id: number;
    hoPr_HoraInicio: number;
    hoPr_HoraFinaliza: number;
    dia_Id: number;
    hoPr_EsEliminado: boolean;
    hoPr_UsuarioRegistra: number;
    hoPr_FechaRegistra: string;
    hoPr_UsuarioModifica: number | null;
    hoPr_FechaModifica: string | null;
}