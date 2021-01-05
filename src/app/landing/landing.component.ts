import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToServices(): void {
    try {
      document.querySelector('#home-services').scrollIntoView({
        behavior: 'smooth'
      });
    } catch (err) {
      console.log(err);
    }
  }
}
