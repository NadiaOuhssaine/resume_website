import { Observable } from 'rxjs';
import { ResponsiveService } from './../services/responsive.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {


  isHandset$: Observable<boolean>;

  downloadFile()
  {
    let link = document.createElement("a");
    link.download = "NadiaOuhssaineResume.pdf";
    link.href = "assets/NadiaOuhssaineResume.pdf";
    link.click();
  }

  constructor(private responsiveservice: ResponsiveService){
    this.isHandset$ = this.responsiveservice.isHandset$;
  }

  ngOnInit(): void {}
}
