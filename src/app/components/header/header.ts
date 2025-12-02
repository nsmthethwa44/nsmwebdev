import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  isNavBarOpen = false;
  activeSection: string = 'home';

  toggleNavBar() {
    this.isNavBarOpen = !this.isNavBarOpen;
  }

  closeNavbar() {
    this.isNavBarOpen = false;
  }

  // when nav link is clicked add active class
// remove current active class
setActive(section: string) {
  this.activeSection = section;
}

}
