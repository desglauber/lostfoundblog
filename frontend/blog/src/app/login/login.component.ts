import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      user:[''],
      password: ['']
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/users")
    .subscribe(res => {
      const user = res.find((a:any) => {
        return a.user === this.loginForm.value.user && a.password === this.loginForm.value.password
      });
      if (user) {
        alert("Login efetuado com sucesso!");
        this.loginForm.reset();
        this.router.navigate(['cadastro'])
      }else {
        alert("Usuário ou senha inválida. Tente novamente.");
        location.assign('/login');
      }
    }, err => {
      alert("Ocorreu um erro.")
    })
  }
}
