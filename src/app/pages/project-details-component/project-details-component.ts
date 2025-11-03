import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project-service';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RightSidebar } from "../../components/right-sidebar/right-sidebar";
import { Videos } from "../../components/videos/videos";

@Component({
  selector: 'app-project-details-component',
  imports: [CommonModule, RightSidebar, Videos],
  templateUrl: './project-details-component.html',
  styleUrl: './project-details-component.scss'
})
export class ProjectDetailsComponent {
projectId!: number;
project!: any;
constructor(private projectSer: ProjectService, private route: ActivatedRoute){}

 ngOnInit(): void {
    this.projectId = Number(this.route.snapshot.paramMap.get('id'));
    this.project = this.projectSer.projects.find(p => p.id === this.projectId);
  }
}
