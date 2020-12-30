import { ResponsiveService } from './../../services/responsive.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {

    scrollToElement($element:string): void {
      //console.log($element);
      var element = document.getElementById($element);
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    isHandset$: Observable<boolean>;
    isBoth$: Observable<boolean>;

    constructor(private service: ResponsiveService){}

    ngOnInit() {
      this.isHandset$ = this.service.isHandset$;
      this.isBoth$ = this.service.isHandset$;
    }

}

