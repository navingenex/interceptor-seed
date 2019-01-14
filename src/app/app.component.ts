import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Interceptor';
  constructor(public loginService: LoginService) {
    this.loginService.login({}).subscribe((data: any) => {
      console.log(data);
      localStorage.setItem('token', data.data.accessToken);
    });
  }
  //sd
  getCustomerDetails() {
    this.loginService.getCustomerDetails().subscribe((data) => {
      console.log('----->>>', data);
    });
  }
}
