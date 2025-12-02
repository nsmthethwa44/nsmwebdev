import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project-service';
import { ProjectCard } from "../../components/project-card/project-card";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects implements OnInit{
  projects: any[] = [];
  constructor(private projectSer: ProjectService){}

  getProjects(){
   this.projects = this.projectSer.projects;
  }

  ngOnInit(): void {
    this.getProjects()
  }
}
