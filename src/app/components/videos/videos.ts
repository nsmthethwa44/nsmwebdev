import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  imports: [],
  templateUrl: './videos.html',
  styleUrl: './videos.scss'
})
export class Videos implements OnInit {
 @Input() project: any;
  safeVideoUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    if (this.project?.vidUrl) {
      const videoId = this.extractYouTubeId(this.project.vidUrl);
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${videoId}`
      );
    }
  }

  private extractYouTubeId(url: string): string {
    const regex = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^?&]+)/;
    const match = url.match(regex);
    return match ? match[1] : '';
  }
}
