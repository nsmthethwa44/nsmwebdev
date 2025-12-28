import { Component } from '@angular/core';
import { Project } from '../../model/projectModel';
import { ProjectService } from '../../services/project-service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-details',
  imports: [CommonModule],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
})
export class ProjectDetails {
project!: Project | any;
constructor(private projectSvc: ProjectService, private route: ActivatedRoute){}

 ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.project = this.projectSvc.projects.find(p => p.slug === slug)!;
  }
}
