import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: 'header.component.html',
})
export class HeaderComponent {

  public navlist = [
    { label: 'Turnos',   icon: 'label', url: '/tickets'  },
    { label: 'Comandas', icon: 'label', url: '/orders'  },
    { label: 'Menú',     icon: 'label', url: '/products'  }
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  // get username(): User | undefined {
  //   return this.authService.
  // }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

}
