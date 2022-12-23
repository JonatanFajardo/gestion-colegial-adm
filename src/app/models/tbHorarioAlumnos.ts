export interface tbHorarioAlumnos {
    hoAl_Id: number;
    cur_Id: number;
    cun_Id: number;
    mat_Id: number;
    hoAl_HoraInicio: number;
    hoAl_HoraFinaliza: number;
    dia_Id: number;
    hoAl_EsEliminado: boolean;
    hoAl_UsuarioRegistra: number;
    hoAl_FechaRegistra: string;
    hoAl_UsuarioModifica: number | null;
    hoAl_FechaModifica: string | null;
}