import { Component, OnInit } from '@angular/core';
import { GetDataloadService } from 'src/app/services/get-dataload/get-dataload.service';
import { IEducation } from 'src/app/interfaces/education_interface';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  dataload: IEducation[] = [];

  constructor(private getdataservice: GetDataloadService) {}

  ngOnInit(): void {
    this.fill();
  }
  fill(): void {
    // this is the endpoint to call to GET the aboutme data
    let url = 'education/';

    // refill the object with the data inside the response
    this.getdataservice
      .get_dataload(url, this.dataload)
      .subscribe((data: any) => {
        this.dataload = data;
      });
  }
}
