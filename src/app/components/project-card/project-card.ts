import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../model/projectModel';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard {
  @Input() project!: Project;
}
