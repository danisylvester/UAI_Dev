import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgControl, FormControlName } from '@angular/forms';
import { MailgunService } from '../mailgun.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  public submitted = false;
  public authorizedEmail: string = 'info@uaimiddleeast.com';

  constructor(private fb: FormBuilder, private mailgunService: MailgunService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: [null,
        Validators.required
      ],
      lastName: [null,
        Validators.required
      ],
      email: [null, [
        Validators.required,
        Validators.email
      ]],
      phoneNumber: [null, [
        Validators.required
      ]],
      message: null
    });
  }

  get firstName(): any {
    return this.contactForm.get('firstName');
  }
  get lastName(): any {
    return this.contactForm.get('lastName');
  }
  get email(): any {
    return this.contactForm.get('email');
  }
  get message(): any {
    return this.contactForm.get('message');
  }
  get phoneNumber(): any {
    return this.contactForm.get('phoneNumber');
  }

  popUpConfirmation(): void {
    if (this.contactForm.valid){
      const contactModal = document.getElementById('myModal');
      contactModal.style.display = 'block';
    }
  }

  closeModalBtn(): void {
    const contactModal = document.getElementById('myModal');
    contactModal.style.display = 'none';
    this.submitted = true;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
      modal.style.display = 'none';
      this.submitted = true;
    }
  }

  sendAnotherMsg(): void {
    this.submitted = false;
  }

  onSubmit(): void {
    const subject = 'Message from: ' + this.firstName.value + ' ' + this.lastName.value;
    const msg = 'Message from: ' + this.firstName.value + ' ' + this.lastName.value + '\n' +
    this.message.value + '\n' +
    'Email; ' + this.email.value + '\n' +
    'Phone Number: ' + this.phoneNumber.value;
    this.mailgunService.sendEmail(
      this.authorizedEmail,
      this.email.value,
      subject,
      msg).subscribe( res => {
        console.log(res);
      }, (error) => {
        console.log(error);
      });
  }
}
