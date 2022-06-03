export interface BaseService {
    execute(): Promise<object>
}

export interface EquipService {
    execute(): Promise<String[]>
}