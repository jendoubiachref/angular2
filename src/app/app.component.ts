import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MesMontres';

  constructor (public authService: AuthService ,private router : Router) {}



  ngOnInit () {
    this.authService.loadToken();
if (this.authService.getToken()==null ||
 this.authService.isTokenExpired())
this.router.navigate(['/login']);
    }
    





}


