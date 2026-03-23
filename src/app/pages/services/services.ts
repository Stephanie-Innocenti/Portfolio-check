import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.html',
  styleUrl: './services.css',
  standalone: true,
})
export class Services {
  title1: string = 'Responsive Web Design  UI/UX Design';
  description1: string =
    'Crafting visually stunning, user-centric websites that provide a seamless experience across all devices. I focus on modern layouts that reflect your brand identity while ensuring high conversion rates';
  title2: string = 'Full-Stack Web Development';
  description2: string =
    'Building robust, scalable, and secure web applications from the ground up. I bridge the gap between complex back-end logic and polished front-end interfaces to deliver high-performance digital solutions.';
  title3: string = 'Professional Photography & Visual Storytelling';
  description3: string =
    'Capturing high-quality imagery that brings your brand’s story to life. From product shoots to corporate portraits, I provide professional editing and composition to elevate your visual presence';
  title4: string = 'Social Media Strategy & Management';
  description4: string =
    'Boosting your online engagement through data-driven content strategies. I manage your social presence, create compelling content, and run targeted ad campaigns to turn followers into loyal customers';
}
