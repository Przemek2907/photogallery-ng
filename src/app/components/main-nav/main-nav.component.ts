import {Component, HostListener, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  navbarTransparent = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  @HostListener('document:scroll')
  onScroll() {
    console.log('Was i here???');
    this.navbarTransparent = document.body.scrollTop > 0;
  }


  constructor(private breakpointObserver: BreakpointObserver) {}

}
