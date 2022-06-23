import { EquipmentsDto } from './dto/equipments.dto';
import { EquipmentEntity, Equipment } from './equipments.entity';


class EquipmentsService {
  private equipments: EquipmentEntity[] = [];

    async listAllEquipments(): Promise<Equipment[]>{
        return this.equipments.map(equipment => equipment.getState());
    }

    async createEquipment(params: EquipmentsDto.CreateEquipmentDto): Promise<Equipment>{
      if (!params?.name)
        throw 'É necessário informar um nome para criar um equipamento.';

      if (!params?.valorLocacao)
        throw 'É necessário informar um valor de locação para criar um equipamento.';

      const equipment = new EquipmentEntity(params);
      this.equipments.push(equipment);

      return equipment.getState();
  }

  async modifierEquipment(params: EquipmentsDto.ModifierEquipmentDto): Promise<Equipment> {
    const {id, name, valorLocacao} = params
    const index = this.equipments.findIndex(item => item.getState().codigo === id)

    if(!this.equipments[index]){
      throw 'O código do equipamento informado não existe!'
    }
    
    this.equipments[index].update({name, valorLocacao})

    return this.equipments[index].getState()
  }

  async deleteEquipment(id: string) {
    const index = this.equipments.findIndex(item => item.getState().codigo === id)

    if(!this.equipments[index]){
      throw 'O código do equipamento informado não existe!'
    }
    
    return this.equipments.splice(index, 1)
  }
  
}

export default new EquipmentsService();