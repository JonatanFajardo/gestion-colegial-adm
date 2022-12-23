export interface tbEmpleadosHistorial {
    emp_Id: number;
    emp_Codigo: string;
    per_Id: number | null;
    tit_Id: number | null;
    car_Id: number | null;
    esActivo: boolean | null;
    esEliminado: boolean | null;
    accion: string;
    fecha: string | null;
    usuario: string;
    hostName: string;
}