import { Component } from '@angular/core';
@Component({
  selector: 'app-introduction',
  standalone:true,
  templateUrl: './introduction.html',
  styleUrl: './introduction.css',
})
export class Introduction {
  greetingText: string = 'Hello! My name is';
  fullName: string = 'Steph';
  roleText: string = 'IT web consultant and developer';
  introduction: string =
    'Here you can find my simply profile focused on my own portfolio and easy to apply ' +
    'for any contact. General info plus website built in modern reactive css style with ' + 
    'angular latest frameworks.'
    

}
