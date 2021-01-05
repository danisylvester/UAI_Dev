import { Component, OnInit } from '@angular/core';
import { ObserversModule } from '@angular/cdk/observers';

declare var $: any;
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
 public options = {
   root: null,
   threshold: 0
 };
  constructor() { }

  ngOnInit(): void {
    const images = document.querySelectorAll('img');
    const imgObserver = new IntersectionObserver(function(entries, imgObserver){
      entries.forEach(entry => {
        if(!entry.isIntersecting){
          return;
        } else {
          console.log(entry.target);
          imgObserver.unobserve(entry.target);
        }
      })
    }, this.options);

  }

}
