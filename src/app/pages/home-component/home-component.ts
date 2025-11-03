import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router'
import { SidebarService } from '../../services/sidebar-service';
import { Sidebar } from "../../components/sidebar/sidebar";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";


@Component({
  selector: 'app-home-component',
  imports: [RouterOutlet, RouterModule, Sidebar, Header, Footer],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})
export class HomeComponent {
constructor(private sidebarSer: SidebarService){}

toggleSidebar(){
  this.sidebarSer.toggleSidebar();
}

closeSidebar(){
  this.sidebarSer.closeSidebar();
}
}
