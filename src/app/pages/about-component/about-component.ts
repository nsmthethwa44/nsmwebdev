import { Component } from '@angular/core';
import  { RouterLink } from '@angular/router';
import { RightSidebar } from "../../components/right-sidebar/right-sidebar";


@Component({
  selector: 'app-about-component',
  imports: [RouterLink, RightSidebar],
  templateUrl: './about-component.html',
  styleUrl: './about-component.scss'
})
export class AboutComponent {

}
