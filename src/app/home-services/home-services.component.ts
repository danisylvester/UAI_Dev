import { ObserversModule } from '@angular/cdk/observers';
import { Component, HostListener, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.scss']
})

export class HomeServicesComponent implements OnInit {
  public options = {
    root: null,
    threshold: 0.2,
    rootMargin: '0px'
  };

  constructor() {}
  ngOnInit(): void {
      const observer = new IntersectionObserver(function(entries, observer){
        entries.forEach(entry =>{
          if(!entry.isIntersecting){
            if(entry.target.classList.contains('fadeInText')){
              entry.target.classList.remove('fadeInText');
            }
          } else {
            entry.target.classList.add('fadeInText');
          }
        })
        }, this.options);
      const fadeInSelections = document.querySelectorAll('div.infoText');
      fadeInSelections.forEach(function(el) {
          observer.observe(el);
        });
  }
}