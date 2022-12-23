export interface tbSemestres {
    sem_Id: number;
    sem_Descripcion: string;
    sem_EsActivo: boolean | null;
    sem_EsEliminado: boolean;
    sem_UsuarioRegistra: number;
    sem_FechaRegistra: string;
    sem_UsuarioModifica: number | null;
    sem_FechaModifica: string | null;
}