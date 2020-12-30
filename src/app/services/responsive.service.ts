import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {


  //private messageSource = new BehaviorSubject('default message');
  //currentMessage = this.messageSource.asObservable();
  public IsLandingPage$: BehaviorSubject<boolean>;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  isLarge$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Large])
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  isXLarge$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XLarge])
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  isBoth$: Observable<boolean> = (this.isXLarge$ || this.isLarge$).pipe(shareReplay());



  setLandingPageValue(newValue): void {
    this.IsLandingPage$.next(newValue);

  }


  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {

    this.IsLandingPage$ = new BehaviorSubject<boolean>(true);
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
          if (event.url == '/')
          {
            this.setLandingPageValue(true)
          }
          else
          {
            this.setLandingPageValue(false)
          }

      }
  });
   }




}
