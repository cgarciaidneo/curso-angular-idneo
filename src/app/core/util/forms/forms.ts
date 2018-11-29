import { FormControl, FormGroup } from "@angular/forms";

export interface IField {
  label?: string;
  name: string;
  state?: string;
  type?: 'text' | 'number' | 'password';
  validators?: any[];
}

export class Field implements IField{
  label: string;
  name: string;
  state: string;
  type: 'text' | 'number' | 'password'
  validators: any[];

  constructor(field: IField){
    this.name = field.name;
    this.label = field.label ? field.label : '';
    this.state = field.state ? field.state : '';
    this.type = field.type ? field.type : 'text';
    this.validators = field.validators ? field.validators : [];
  }
}

export function buildFormGroup(fields: IField[]){
  console.log(fields);
  const controls = {};

  for(let field of fields){
    controls[field.name] = new FormControl(field.state, field.validators)
  }

  console.log(controls);
  return new FormGroup(controls);
}

