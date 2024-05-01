import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(public router:Router) {}
  onLogo() {this.router.navigate(['/'])}
  onStudentsCreate() {this.router.navigate(['/students/create'])}
  onStudentsView() {this.router.navigate(['/students/view'])}

}
