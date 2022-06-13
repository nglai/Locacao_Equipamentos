import { EquipmentEntity, Equipment } from './equipments.entity';

class EquipmentsService {
  private equipments: EquipmentEntity[] = [];

  async listAllEquipments(): Promise<Equipment[]> {
    return this.equipments.map(equipment => equipment.getState());
  }

  async createEquipment(name: string ): Promise<Equipment> {
    if (!name)
      throw 'É necessário informar um nome para criar um equipamento.';

    const equipment = new EquipmentEntity(name);
    this.equipments.push(equipment);

    return equipment.getState();
  }

  async modifierEquipment(name: string , id: string): Promise<Equipment> {
    const index = this.equipments.findIndex(item => item.codigo === id)

    if(!this.equipments[index]){
      throw 'O código do equipamento informado não existe!'
    }

    this.equipments[index].name = name

    return this.equipments[index].getState()
  }

  async deleteEquipment(id: string) {
    const index = this.equipments.findIndex(item => item.codigo === id)

    if(!this.equipments[index]){
      throw 'O código do equipamento informado não existe!'
    }

    return this.equipments.splice(index, 1)
  }
}

export default new EquipmentsService();