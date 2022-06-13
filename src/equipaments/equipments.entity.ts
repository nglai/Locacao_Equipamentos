import { v4 as uuid } from 'uuid';

class EquipmentEntity {
  codigo: string;
  name: string;

  constructor(name: string){
    this.codigo = uuid();
    this.name = name;
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