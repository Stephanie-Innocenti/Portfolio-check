import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  @Input() buttonText: string = 'Get In';
  @Output() buttonClick = new EventEmitter<void>();

  onButtonClick(event: MouseEvent): void {
    event.preventDefault();
    console.log(" click", this.buttonClick)
    this.buttonClick.emit();  
  }
}
