import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  phoneNumber = '+1 2345678912';
  email = 'prova@gmail.com';
    constructor(public router:Router){

  }


}
