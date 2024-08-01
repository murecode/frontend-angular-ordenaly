import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const loginGuard = () => {

  const router = inject(Router)

  if (localStorage.getItem('jwtToken')) {
    return true
  } else {
    router.navigate(['/auth/login'])
    return false;
  }
}