import { ResponsiveService } from './../services/responsive.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export type FadeState = 'visible' | 'hidden';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss'],
})
export class PortfolioPageComponent implements OnInit {

  constructor(private responsiveservice: ResponsiveService) { }

  isHandset$: Observable<boolean>;


  ngOnInit(): void {
    this.isHandset$ = this.responsiveservice.isHandset$;
  }

}
