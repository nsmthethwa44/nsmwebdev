import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero  {
images = [
  'assets/img/visual_studio_30px.png',
  'assets/img/angularjs_30px.png',
  'assets/img/c_sharp_logo_2_30px.png',
  'assets/img/javascript_30px.png',
  'assets/img/html_5_30px.png',
  'assets/img/Framework_30px.png',
  'assets/img/figma_30px.png',
  'assets/img/cloud_function_30px.png',
  'assets/img/css3_30px.png',
  'assets/img/github_30px.png',
  'assets/img/sass_avatar_30px.png',
  'assets/img/sql_30px.png',
  'assets/img/typescript_30px.png',
  'assets/img/visual_studio_code_2019_30px.png',
];
positions: { top: string; left: string; rotation: string; delay: string; scale: string; duration: string; imgIndex: number }[] = [];

ngOnInit() {
  // this.images.forEach((img, imgIndex) => {
  //   for (let i = 0; i < 5; i++) {
  //     const duration = 20 + Math.random() * 20; // 20s to 40s for variation
  //     this.positions.push({
  //       top: `${Math.random() * 90}vh`,
  //       left: `${Math.random() * 95}vw`,
  //       rotation: `${Math.random() * 360}deg`,
  //       delay: `${Math.random() * 20}s`,
  //       scale: `${0.5 + Math.random() * 0.8}`,
  //       duration: `${duration}s`,
  //       imgIndex
  //     });
  //   }
  // });

  this.images.forEach((img, imgIndex) => {
  const duration = 20 + Math.random() * 20; // 20s to 40s
  this.positions.push({
    top: `${Math.random() * 90}vh`,
    left: `${Math.random() * 95}vw`,
    rotation: `${Math.random() * 360}deg`,
    delay: `${Math.random() * 20}s`,
    scale: `${0.5 + Math.random() * 0.8}`,
    duration: `${duration}s`,
    imgIndex
  });
});



}

}
