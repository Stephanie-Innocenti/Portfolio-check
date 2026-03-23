import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Button } from '../../component/button/button';

@Component({
  selector: 'app-portfolio',
  imports:[Button,RouterModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
  standalone:true
})
export class Portfolio {
  constructor(public router:Router) {

    
  }
  GetIn(choose: string) : void  {
    window.location.href = `https://github.com/Stephanie-Innocenti/${choose}`
  }
  
}
