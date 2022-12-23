export interface tbEncargadosHistorial {
    enc_Id: number;
    per_Id: number | null;
    esActivo: boolean | null;
    esEliminado: boolean | null;
    accion: string;
    fecha: string | null;
    usuario: string;
    hostName: string;
}