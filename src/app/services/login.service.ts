import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/operator/map';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) { }

    login(data) {
        data = {
            "email": "s@g.com",
            "password": "123456",
            "deviceType": "web",
            "appVersion": "version",
            "deviceId": "id",
            "deviceToken": "NO"
        }
        return this.http.post('http://api-dev.brainpundits.com:7077/v1/auth/email/login', data);
    }

    getCustomerDetails() {
        return this.http.get('http://api-dev.brainpundits.com:7077/v1/users/5b98d3bcaa2b7a765e0711e9');
    }

}
