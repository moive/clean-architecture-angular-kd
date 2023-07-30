import { Component } from '@angular/core';
import { UserLoginUseCase } from '../../domain/useCases/user-login.usercase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'clean-architecture-angular';

  constructor(private userLoginUseCase: UserLoginUseCase) {}

  getUser() {
    this.userLoginUseCase
      .execute({ username: '', password: '' })
      .subscribe(console.log);
  }
}
