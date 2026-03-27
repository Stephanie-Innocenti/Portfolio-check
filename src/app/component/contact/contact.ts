import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { secrets } from '../../../environments/environments.secrets';
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

  private readonly config = { ...secrets };

  email = secrets.email;
  phoneNumber = secrets.phoneNumber;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit() {
    emailjs.init(secrets.PUBLIC_KEY);
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';

      emailjs
        .sendForm(
          secrets.SERVICE_ID,
          secrets.TEMPLATE_ID,
          this.contactForm.value as HTMLFormElement,
        )
        .then(
          (response: EmailJSResponseStatus) => {
            this.successMessage = 'Message send...we get in touch soon. 🎉';
            this.contactForm.reset();
          },
          (error) => {
            this.errorMessage = 'Error sending... prove directly email';
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
