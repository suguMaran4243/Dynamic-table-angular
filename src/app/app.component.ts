import { Component } from '@angular/core';
import { headerNamings,studentData,data} from './table-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'table';
  
  headings=headerNamings;
  data:data[]=studentData;
}
