import { Component } from '@angular/core';
import { ProjectCard } from "../../components/project-card/project-card";
import { ProjectService } from '../../services/project-service';
import { CommonModule } from '@angular/common';
import { RightSidebar } from "../../components/right-sidebar/right-sidebar";

@Component({
  selector: 'app-hero-component',
  imports: [ProjectCard, CommonModule, RightSidebar],
  templateUrl: './hero-component.html',
  styleUrl: './hero-component.scss'
})
export class HeroComponent {
constructor(public projectSer: ProjectService){}
}
