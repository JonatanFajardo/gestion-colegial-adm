export interface tbNotasHistorial {
    not_Id: number;
    not_Nota: number | null;
    mat_Id: number | null;
    sem_Id: number | null;
    pac_Id: number | null;
    not_Ano: string | null;
    esActivo: boolean | null;
    esEliminado: boolean | null;
    accion: string;
    fecha: string | null;
    usuario: string;
    hostName: string;
}