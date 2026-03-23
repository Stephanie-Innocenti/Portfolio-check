import { Component } from '@angular/core';
import { Introduction } from '../introduction/introduction';
import { AboutMe } from '../about-me/about-me';
import { Contact } from '../../component/contact/contact';
import { Services } from '../services/services';

@Component({
  selector: 'app-main',
  imports: [Introduction,AboutMe,Contact,Services],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {}
