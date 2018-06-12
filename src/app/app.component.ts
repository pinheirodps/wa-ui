import {Component, OnInit} from '@angular/core';

import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  csvs:  Array<any>;

  constructor(private service: AppService) {}

  ngOnInit() {
    this.csvs = [];

  }

  inputFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('csv', file);
      this.service.uploadList(formData)
        .subscribe(resposta => this.csvs = resposta);
      }
  }

}
