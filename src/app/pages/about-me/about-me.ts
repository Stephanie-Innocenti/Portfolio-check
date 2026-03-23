import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {

  sectionTitle:string = 'About Me';
  introductionText:string = 'Learn more about me';
  aboutMeParagragh1:string='Strong condifent and clear with projects work on team';
  aboutMeParagraph2:string='Difficult years required mental healt and elasticity';
  aboutMeParagraph3:string='Currently focused on learing and improving my self.';
  buttonText:string="View Projects";
  constructor(public router:Router) {
    
  }
  navigateToAbout() : void {
    this.router.navigate(['/portfolio']);
  }
}
