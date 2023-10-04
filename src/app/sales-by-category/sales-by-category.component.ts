import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sales-by-category',
  templateUrl: './sales-by-category.component.html',
  styleUrls: ['./sales-by-category.component.scss']
})

export class SalesByCategoryComponent  {
  jsonData: any; // Declare a variable to store the JSON data

  constructor(private http: HttpClient) { }



  fetchData() {
    const apiUrl = 'http://127.0.0.1:8000/api/result';

    this.http.get(apiUrl).subscribe((data: any) => {
      // Store the fetched JSON data
      this.jsonData = data[data.length - 1];
    });
  }
}
