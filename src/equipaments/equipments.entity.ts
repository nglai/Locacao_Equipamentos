import { v4 as uuid } from 'uuid';

class EquipmentEntity {
  private codigo: string;
  private name: string;

  constructor(params: { name: string}){
    this.codigo = uuid();
    this.name = params.name;
  }

  getState(): Equipment{
    return {
      codigo: this.codigo,
      name: this.name
    }
  }
}

type Equipment = {
  codigo: string;
  name: string;
}

export {EquipmentEntity, Equipment};