import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  user = {
    name: "", email: "", password: ""
  }
  onSubmit(event: Event) {
    event.preventDefault(); // prevent actual form submission/reload

    const form = event.target as HTMLFormElement;
    if (!form) {
      console.error('Form element not found');
      return;
    }

    const formData = new FormData(form);
    const data = {
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password'),
    };

    console.log('Submitted data:', data);
  }

}
