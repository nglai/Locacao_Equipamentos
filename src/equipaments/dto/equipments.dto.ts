export namespace EquipmentsDto {
    export type ModifierEquipmentDto = {
        name: string
        id: string
        valorLocacao: number
    }
    export type CreateEquipmentDto = {
        name: string
        valorLocacao: number
    }
}