import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconMarquee } from "../../components/icon-marquee/icon-marquee";

@Component({
  selector: 'app-stacks',
  imports: [CommonModule, IconMarquee],
  templateUrl: './stacks.html',
  styleUrl: './stacks.scss',
})
export class Stacks {

}
