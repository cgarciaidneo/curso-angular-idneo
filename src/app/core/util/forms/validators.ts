import { AbstractControl } from "@angular/forms";

export function customValidator(control: AbstractControl) {
  return control.value === "Cristian" ? null : {
    "error": "El nombre no es Cristian"
  };
}
