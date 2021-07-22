import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gb-guestbook-form',
  templateUrl: './guestbook-form.component.html',
  styleUrls: ['./guestbook-form.component.css']
})
export class GuestbookFormComponent implements OnInit {
  createForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      inhalt: ['', Validators.required]
    })
  }

  submitForm() {
    const formValue = this.createForm.value;
    this.createForm.reset();
  }
}
