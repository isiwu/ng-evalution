import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { IGX_GRID_DIRECTIVES } from 'igniteui-angular';
import { athletesData } from '../../data/pageData';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'paging-sample-component',
    styleUrls: ['./paging.component.scss'],
    imports: [IGX_GRID_DIRECTIVES],
    templateUrl: 'paging.component.html'
})

export class PagingSampleComponent implements OnInit {
    @ViewChild('grid1', { static: true })
  public grid1!: IgxGridComponent;
    public data!: any[];

    public ngOnInit(): void {
        this.data = athletesData;
    }
}
