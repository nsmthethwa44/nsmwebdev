import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar-service';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  constructor(private sidebarSer: SidebarService){}
  
closeSidebar(){
  this.sidebarSer.closeSidebar();
}
}
