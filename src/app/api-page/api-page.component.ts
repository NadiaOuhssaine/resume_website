import { ResponsiveService } from './../services/responsive.service';
import { ChangeDetectionStrategy, Component, Input , OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import {FormBuilder,FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-api-page',
  templateUrl: './api-page.component.html',
  styleUrls: ['./api-page.component.scss']
 })

 export class ApiPageComponent implements OnInit {
  panelOpenState = false;
  isHandset$: Observable<boolean>;
  form: FormGroup;
  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
  honeypot: FormControl = new FormControl(""); // we will use this to prevent spam
  submitted: boolean = false; // show and hide the success message
  isLoading: boolean = false; // disable the submit button if we're loading
  responseMessage: string; // the response message to show to the user


  constructor( private responsiveservice: ResponsiveService, private formBuilder : FormBuilder, private http : HttpClient) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
      honeypot: this.honeypot
    });
   }


  ngOnInit(): void {
    this.isHandset$ = this.responsiveservice.isHandset$;
  }
  onSubmit() {
    if (this.form.status == "VALID" && this.honeypot.value == "") {
      this.form.disable(); // disable the form if it's valid to disable multiple submissions
      var formData: any = new FormData();
      formData.append("name", this.form.get("name").value);
      formData.append("email", this.form.get("email").value);
      formData.append("message", this.form.get("message").value);
      this.isLoading = true; // sending the post request async so it's in progress
      this.submitted = false; // hide the response message on multiple submits
      this.http.post("https://script.google.com/macros/s/AKfycbzACKy8VAki48f6W04_TuqeklTE1nQfHPlWooUQ/exec", formData).subscribe(
        (response) => {
          // choose the response message
          if (response["result"] == "success") {
            this.responseMessage = "Merci pour votre message! Je vous recontacterai bientôt!";
          } else {
            this.responseMessage = "Oops! Une erreur s'est produite ... Rechargez la page et réessayez.";
          }
          this.form.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(response);
        },
        (error) => {
          this.responseMessage = "Oops! Une erreur s'est produite ... Rechargez la page et réessayez.";
          this.form.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(error);
        }

        );
      }
    }

}






