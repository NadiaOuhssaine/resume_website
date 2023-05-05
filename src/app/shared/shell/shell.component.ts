import { ResponsiveService } from './../../services/responsive.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {

  phoneNumber = '+33650317966';
  email = 'ouhssaine.nadia@gmail.com';

  isHandset$: Observable<boolean>;
  isBoth$: Observable<boolean>;

  downloadFile() {
    let link = document.createElement("a");
    link.download = "NadiaOuhssaineResume.pdf";
    link.href = "assets/NadiaOuhssaineResume.pdf";
    link.click();
  }

  searchPosition() {
    let link = window.open("https://www.google.com/maps/place/Paris/@48.8589384,2.2646344,12z", "_blank");
    link.opener = null;
  }

  constructor(private service: ResponsiveService){}

  ngOnInit() {
    this.isHandset$ = this.service.isHandset$;
    this.isBoth$ = this.service.isHandset$;
  }

}

