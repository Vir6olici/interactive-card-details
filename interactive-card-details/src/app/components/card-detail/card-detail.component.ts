import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs';
import { CardDetails } from 'src/app/interfaces/card-details';
import { validateFormGroup,markAsDirtyAndTouched } from 'src/app/shared/shared';
import { CardDetailsConstants } from '../../constants/cardDetailConstants';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit, OnDestroy {

  public invalidCardholderName: boolean = false;

  public cardDetailsForm: FormGroup = new FormGroup({
    cardholderName: new FormControl('', Validators.required),
    cardNumber: new FormControl('',Validators.required),
    expireMonth: new FormControl('',Validators.required),
    expireYear: new FormControl('',Validators.required),
    cvc: new FormControl('',Validators.required)
  })

  constructor() { }

  ngOnInit(): void {     
    this.validateCardHolderName();
  }

  private validateCardHolderName(){
    this.cardDetailsForm.controls['cardholderName'].valueChanges.subscribe((valueCardHolderName:string) => {
      if((valueCardHolderName.length < 7 || valueCardHolderName.length > 25) && !/[0-9]/.test(valueCardHolderName)){
        this.invalidCardholderName = true;
      }else {
        this.invalidCardholderName = false;
      }
    })
   
  }

  ngOnDestroy(): void {
      
  }

  onSubmit(): void{

  }

}
