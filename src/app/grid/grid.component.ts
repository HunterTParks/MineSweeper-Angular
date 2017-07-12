import { Component, OnInit } from '@angular/core';
import { Tile } from '../tile.model';
import { Minefield } from '../minefield.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers: [Minefield]
})
export class GridComponent implements OnInit {
  constructor(public minefield: Minefield = new Minefield()){

  }

  ngOnInit() {
    console.log(this.minefield);
    for(var i = 0; i < 12; i ++){
      var rows = [];
      for(var ii = 0; ii < 12; ii ++){
        var newTile: Tile = new Tile();
        rows.push(newTile);
        // console.log(rows);
      }

      this.minefield.columns.push(rows);

    }
    // console.log(this.minefield.columns);
    // console.log(rows);
  }

  onClick(tile: Tile){
    alert("HEY");
  }
}
