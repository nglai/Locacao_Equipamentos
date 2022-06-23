import { v4 as uuid } from 'uuid';

class EquipmentEntity {
  private codigo: string;
  private name: string;
  private valorLocacao: number;

  constructor(params: { name: string, valorLocacao: number}){
    this.codigo = uuid();
    this.name = params.name;
    this.valorLocacao = params.valorLocacao
  }

  getState(): Equipment{
    return {
      codigo: this.codigo,
      name: this.name,
      valorLocacao: this.valorLocacao
    }
  }

  update(params: { name: string, valorLocacao: number}){
    if(!params.name){
      name: this.name
    } else {this.name = params.name;}
    if(!params.valorLocacao){
      valorLocacao: this.valorLocacao
    } else {this.valorLocacao = params.valorLocacao}
    
    return {
      codigo: this.codigo,
      name: this.name,
      valorLocacao: this.valorLocacao
    }
  }

}

type Equipment = {
  codigo: string;
  name: string;
  valorLocacao: number;
}

export {EquipmentEntity, Equipment};