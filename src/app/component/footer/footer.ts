import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit {
currentDate: any;

constructor(){}
  ngOnInit(): void {
   
    this.currentDate = new Date().getFullYear();

  }

}

