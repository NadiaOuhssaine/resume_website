import { ResponsiveService } from './../services/responsive.service';
import { ChangeDetectionStrategy, Component, Input , OnInit} from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-api-page',
  templateUrl: './api-page.component.html',
  styleUrls: ['./api-page.component.scss']
 })

export class ApiPageComponent implements OnInit {

  isHandset$: Observable<boolean>;

  constructor(private responsiveservice: ResponsiveService) { }



  ngOnInit(): void {
    this.isHandset$ = this.responsiveservice.isHandset$;
  }

}
