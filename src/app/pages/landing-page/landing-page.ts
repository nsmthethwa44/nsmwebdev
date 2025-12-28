import { Component } from '@angular/core';
import { Tools } from "../../components/tools/tools";
import { About } from "../../sections/about/about";
import { Services } from "../../sections/services/services";
import { Projects } from "../../sections/projects/projects";
import { Eduction } from "../../sections/eduction/eduction";
import { Faqs } from "../../sections/faqs/faqs";
import { Contact } from "../../sections/contact/contact";
import { Hero } from "../../sections/hero/hero";
import { Stacks } from "../../sections/stacks/stacks";

@Component({
  selector: 'app-landing-page',
  imports: [About, Services, Projects, Eduction, Faqs, Contact, Hero, Stacks],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {

}
