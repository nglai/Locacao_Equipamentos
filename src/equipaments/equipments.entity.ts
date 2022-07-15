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

  update(params: { name?: string, valorLocacao?: number}){
    this.name = params.name ?? this.name
    this.valorLocacao = params.valorLocacao ?? this.valorLocacao
    // Object.keys(params).forEach( item => {
    //   if(params[item] !== undefined) this[item] = params[item]
    // })
    //params["name"] === params.name
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