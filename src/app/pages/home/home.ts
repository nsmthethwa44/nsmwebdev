import { Component } from '@angular/core';
import { Hero } from "../../sections/hero/hero";
import { Tools } from "../../components/tools/tools";
import { About } from "../../sections/about/about";
import { Services } from "../../sections/services/services";
import { Projects } from "../../sections/projects/projects";
import { Eduction } from "../../sections/eduction/eduction";
import { Faqs } from "../../sections/faqs/faqs";
import { Contact } from "../../sections/contact/contact";
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Services, Projects, Eduction, Faqs, Contact, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
