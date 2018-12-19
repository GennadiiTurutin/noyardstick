import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'], 
  providers: [UserService]
})
export class SignupComponent implements OnInit {
  userRegister: FormGroup;
  loading: boolean;

  constructor(private userService: UserService, 
              private fb: FormBuilder,
              private router: Router) {

              this.userRegister = this.fb.group({
                  username: ['', Validators.required],
                  email: ['', [Validators.required, Validators.email]],
                  password: ['', Validators.required, Validators.minLength(6)]
                });
               }

  ngOnInit() {
    this.loading = false;

  }

  registerUser() {
    this.loading = true;
    this.userService.registerNewUser(this.userRegister.value).subscribe(
      response => {
        this.loading = false;
        this.router.navigate(['/']);
      },
      error => {
        this.loading = false;
        console.log('error', error)
      }
    );
  }
}
