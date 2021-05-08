import { ResponsiveService } from './../services/responsive.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.scss'],

})
export class ResumePageComponent implements OnInit{


  isBoth$: Observable<boolean>;
  isLarge$: Observable<boolean>;
  isHandset$: Observable<boolean>;
  panelOpenState = false;



  downloadFile()
  {
    let link = document.createElement("a");
    link.download = "NadiaOuhssaineResume.pdf";
    link.href = "assets/NadiaOuhssaineResume.pdf";
    link.click();
  }


  constructor(private responsiveservice: ResponsiveService){}

  ngOnInit() {
    this.isLarge$ = this.responsiveservice.isLarge$;
    this.isBoth$ = this.responsiveservice.isBoth$;
    this.isHandset$ = this.responsiveservice.isHandset$;

      }

}
