export interface tbCursosHistorial {
    cur_Id: number;
    cno_Id: number | null;
    aul_Id: number | null;
    sec_Id: number | null;
    niv_Id: number | null;
    mda_Id: number | null;
    esActivo: boolean | null;
    esEliminado: boolean | null;
    accion: string;
    fecha: string | null;
    usuario: string;
    hostName: string;
}