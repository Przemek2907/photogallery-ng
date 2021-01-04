import {Component, HostListener} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    const navBarElement = document.getElementById('mainToolbar');
    navBarElement.style.backgroundColor = event.target.scrollTop > 0 ? '#e9e4d6' : 'transparent';
    }

}
