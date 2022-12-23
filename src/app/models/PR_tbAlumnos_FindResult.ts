export interface PR_tbAlumnos_FindResult {
    niv_Id: number | null;
    niv_Descripcion: string;
    cun_Id: number | null;
    cun_Descripcion: string;
    mda_Id: number | null;
    mda_Descripcion: string;
    cur_Id: number;
    cur_Nombre: string;
    sec_Id: number | null;
    sec_Descripcion: string;
    est_Id: number;
    est_Descripcion: string;
    alu_Id: number;
    per_Identidad: string;
    per_PrimerNombre: string;
    per_SegundoNombre: string;
    per_ApellidoPaterno: string;
    per_ApellidoMaterno: string;
    per_FechaNacimiento: string;
    per_CorreoElectronico: string;
    per_Telefono: string;
    per_Direccion: string;
    per_Sexo: string;
    per_EsEliminado: boolean;
}