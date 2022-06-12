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
}

export default new EquipmentsService();