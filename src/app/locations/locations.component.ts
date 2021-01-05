import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT, getLocaleDateFormat } from '@angular/common';
import isVisible from 'is-element-visible';


declare var $: any;

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {


  @HostListener('window:scroll', ['$event']) onScroll(e) {
    let ele = document.getElementById('loc1');
    let x = this.elementInViewport(ele);
    ele = document.getElementById('menuItem1');
    if (x) {
      if (!ele.classList.contains('highlight')) {
        ele.classList.add('highlight');
      }
    } else {
      ele.classList.remove('highlight');
    }

    let ele2 = document.getElementById('loc2');
    let x2 = this.elementInViewport(ele2);
    ele2 = document.getElementById('menuItem2');
    if (x2) {
      if (!ele2.classList.contains('highlight')) {
        ele2.classList.add('highlight');
      }
    } else {
      ele2.classList.remove('highlight');
    }

    let ele3 = document.getElementById('loc3');
    let x3 = this.elementInViewport(ele3);
    ele3 = document.getElementById('menuItem3');
    if (x3) {
      if (!ele3.classList.contains('highlight')) {
        ele3.classList.add('highlight');
      }
    } else {
      ele3.classList.remove('highlight');
    }

    let ele4 = document.getElementById('loc4');
    let x4 = this.elementInViewport(ele4);
    ele4 = document.getElementById('menuItem4');
    if (x4) {
      if (!ele4.classList.contains('highlight')) {
        ele4.classList.add('highlight');
      }
    } else {
      ele4.classList.remove('highlight');
    }

    let ele5 = document.getElementById('loc5');
    let x5 = this.elementInViewport(ele5);
    ele5 = document.getElementById('menuItem5');
    if (x5) {
      if (!ele5.classList.contains('highlight')) {
        ele5.classList.add('highlight');
      }
    } else {
      ele5.classList.remove('highlight');
    }

    let ele6 = document.getElementById('loc6');
    let x6 = this.elementInViewport(ele6);
    ele6 = document.getElementById('menuItem6');
    if (x6) {
      if (!ele6.classList.contains('highlight')) {
        ele6.classList.add('highlight');
      }
    } else {
      ele6.classList.remove('highlight');
    }

    let ele7 = document.getElementById('loc7');
    let x7 = this.elementInViewport(ele7);
    ele7 = document.getElementById('menuItem7');
    if (x7) {
      if (!ele7.classList.contains('highlight')) {
        ele7.classList.add('highlight');
      }
    } else {
      ele7.classList.remove('highlight');
    }
  }

  public highlight: boolean = false;

  constructor() {

  }

  ngOnInit(): void {

  }
  private elementInViewport(el) {

    // Special bonus for those using jQuery
    if (typeof $ === 'function' && el instanceof $) {
      el = el[0];
    }

    const rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) * 1.5
    );
  }

  scrollToLocation(event):void {
    var menuEl = event.target;
    var menuIdAttr = menuEl.attributes.id;
    var menuId = menuIdAttr.nodeValue;
    var num = menuId.charAt(8);
    var el = document.getElementById(`loc${num}`);
    var elOffset = 60;
    var elPosition = el.getBoundingClientRect().top;
    var offsetPosition = elPosition - elOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
 });

  }
}


