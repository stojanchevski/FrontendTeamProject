import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-top-three-products',
  templateUrl: './top-three-products.component.html',
  styleUrls: ['./top-three-products.component.scss']
})

export class TopThreeProductsComponent {
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
