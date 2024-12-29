import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { PagingSampleComponent } from "./grid/paging/paging.component";

@Component({
  selector: 'app-root',
  imports: [NgbNavModule, PagingSampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-evalution';
}
