import { AbstractControl, FormControl, FormGroup } from "@angular/forms";
export function validateFormGroup(control: AbstractControl): void{
    const formGroup: FormGroup = control as FormGroup;
    if(formGroup.controls){
        const typeKeys = Object.keys(formGroup.controls);
        typeKeys.forEach( (key:string) => {
            if(formGroup.get(key)){
                validateFormGroup(formGroup);
            }else {
                markAsDirtyAndTouched(formGroup);
            }
        })
    }
}

export function markAsDirtyAndTouched(formControl: AbstractControl): void{
    formControl.markAsDirty();
    formControl.markAsTouched();   
    formControl.updateValueAndValidity();
}