import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsiveService } from './services/responsive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private responsiveservice: ResponsiveService){}
  isLandingPage$:Observable<boolean>;



  ngOnInit() : void {
    this.isLandingPage$ = this.responsiveservice.IsLandingPage$
 }


}
