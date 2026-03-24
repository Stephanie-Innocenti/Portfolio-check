import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  contactForm: FormGroup;
  isLoading = false;
  successMessage = '';
  errorMessage = '';

  phoneNumber = '+39 123 456789';
  email = 'email@email.com';

  private SERVICE_ID = 'YOUR_SERVICE_ID';
  private TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  private PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit() {
    emailjs.init(this.PUBLIC_KEY);
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';

      emailjs
        .sendForm(this.SERVICE_ID, this.TEMPLATE_ID, this.contactForm.value as HTMLFormElement)
        .then(
          (response: EmailJSResponseStatus) => {
            this.successMessage = 'Messaggio inviato! Ti rispondo presto. 🎉';
            this.contactForm.reset();
          },
          (error) => {
            this.errorMessage = 'Errore invio. Prova email diretta.';
            console.error('EmailJS error:', error);
          },
        )
        .finally(() => (this.isLoading = false));
    }
  }

  isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
