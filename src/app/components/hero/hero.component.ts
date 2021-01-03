import { Component, OnInit } from '@angular/core';
import {gsap} from 'gsap';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  timeline = gsap.timeline({defaults: {ease: 'power1.out'}});

  constructor() { }

  ngOnInit(): void {
    this.animate();
  }


  animate() {
    this.timeline.to('.text', {y: '0%', duration: 1, stagger: 0.25});
    this.timeline.to('.slider', {y: '-100%', duration: 1.5, delay: 0.7});
    this.timeline.to('.intro', {y: '-100%', duration: 1}, '-=1.2');
    this.timeline.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1});
  }

}
