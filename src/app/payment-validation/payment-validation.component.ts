import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-validation',
  templateUrl: './payment-validation.component.html',
  styleUrls: ['./payment-validation.component.css']
})
export class PaymentValidationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  
  }
currentYear = new Date().getFullYear();

paymentForm = new FormGroup({
  cardNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]{16}')]),
  cardName: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z ]+")]),
  expirationMonth: new FormControl('', [Validators.required, Validators.pattern("^(0?[1-9]|1[0-2])$")]),
  expirationYear: new FormControl('', [Validators.required]),
  cvv: new FormControl('', [Validators.required, Validators.pattern('[0-9]{3}')])
});




  get cardNumber()
  {
    return this.paymentForm.get('cardNumber');
  }
  get cardName()
  {
    return this.paymentForm.get('cardName');
  }
  get expirationMonth()
  {
    return this.paymentForm.get('expirationMonth');
  }
  get expirationYear()
  {
    return this.paymentForm.get('expirationYear');
  }
  get cvv()
  {
    return this.paymentForm.get('cvv');
  }

  onSubmit(): void {
    console.log(this.paymentForm.value);
    alert("Submitted successfully");
    this.paymentForm.reset();
  }

}


