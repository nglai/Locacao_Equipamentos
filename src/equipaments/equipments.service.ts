import { EquipmentEntity, Equipment } from './equipments.entity';

class EquipmentsService {
  private equipments: EquipmentEntity[] = [];

    async listAllEquipments(): Promise<Equipment[]>{
        return this.equipments.map(equipment => equipment.getState());
    }

    async createEquipment(params: { name: string }): Promise<Equipment>{
      if (!params?.name)
        throw 'É necessário informar um nome para criar um equipamento.';

      const equipment = new EquipmentEntity(params);
      this.equipments.push(equipment);

      return equipment.getState();
  }

  async modifierEquipment(params: { name: string } , id: string): Promise<Equipment> {
    const index = this.equipments.findIndex(item => item.getState().codigo === id)

    if(!this.equipments[index]){
      throw 'O código do equipamento informado não existe!'
    }

    const {name} = params
    this.equipments[index].update({name})

    return this.equipments[index].getState()
  }

  
}

export default new EquipmentsService();