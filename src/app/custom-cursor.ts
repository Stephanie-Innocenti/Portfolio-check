// import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';

// @Directive({
//   selector: '[appCustomCursor]',
// })
// export class CustomCursor implements OnInit, OnDestroy {
//   private cursor!: HTMLElement;

//   constructor(
//     private render: Renderer2,
//     private el: ElementRef,
//   ) {}

//   private isMobile(): boolean {
//     if (/Android/i.test(navigator.userAgent) || /iPhone|iPad|iPod/i.test(navigator.userAgent)) {
//       return true;
//     } else return false;
//   }
//   private initCursor(): void {
//     if (this.isMobile()) return;
//     this.cursor = this.render.createElement('div');
//     this.cursor.className = 'kawaii-cursor';
//     this.render.appendChild(document.body, this.cursor);
//     window.addEventListener('mousemove', this.positionElement);
//     window.addEventListener('mousedown', this.enlargeCursor);
//     window.addEventListener('mouseup', this.shrinkCursor);
//   }
//   private positionElement = (event: MouseEvent): void => {
//     const mouseY = event.clientY - 20;
//     const mouseX = event.clientX - 20;
//     this.cursor.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`;
//   };
//   private enlargeCursor = (): void => {
//     this.cursor.style.transform += 'scale(1.3)';
//     this.cursor.style.transition = 'transform 0.8s ease';
//   };
//   private shrinkCursor = () => {
//     this.cursor.style.transform = this.cursor.style.transform.replace('scale(1.3)', '');
//     this.cursor.style.transition = 'transform 0.8s ease';
//   };
//   ngOnInit(): void {
//     this.initCursor;
//   }
//   ngOnDestroy(): void {
//     window.removeEventListener('mousemove', this.positionElement);
//     window.removeEventListener('mouseup', this.enlargeCursor);
//     window.removeEventListener('mouseup', this.shrinkCursor);
//     if (this.cursor) {
//       this.render.removeChild(document.body, this.cursor);
//     }
//   }
// }
