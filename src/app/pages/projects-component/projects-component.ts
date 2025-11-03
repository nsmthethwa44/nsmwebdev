import { Component } from '@angular/core';
import { ProjectCard } from "../../components/project-card/project-card";
import { ProjectService } from '../../services/project-service';
import { CommonModule } from '@angular/common';
import { RightSidebar } from "../../components/right-sidebar/right-sidebar";

@Component({
  selector: 'app-projects-component',
  imports: [CommonModule, ProjectCard, RightSidebar],
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.scss'
})
export class ProjectsComponent {
constructor(public projectSer: ProjectService){}
}
