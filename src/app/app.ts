import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollTop } from "./components/scroll-top/scroll-top";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScrollTop],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'nsm';
  isVisible = false;

   ngOnInit(): void {
    window.onscroll = () =>{
      if(window.scrollY > 2){
        this.isVisible = true;
      }else{
        this.isVisible = false;
      }
    }
  }
}
