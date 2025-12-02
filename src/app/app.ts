import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollTop } from "./components/scroll-top/scroll-top";
import { Home } from "./pages/home/home";
import { Header } from "./components/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScrollTop, Home, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Nkululeko Mthethwa - Full-Stack .NET & Angular Developer';
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
