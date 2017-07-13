import { Component, OnInit } from '@angular/core';
import { Tile } from '../tile.model';
import { Minefield } from '../minefield.model';
import { minesweeper } from 'minesweeper';

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
    for(var i = 0; i < 12; i ++){
      var rows = [];
      for(var ii = 0; ii < 12; ii ++){
        var newTile: Tile = new Tile();
        var rng = Math.floor(Math.random() * 10) + 1;
        if(rng > 6){
          newTile.bomb = true;
        }
        rows.push(newTile);
      }
      this.minefield.columns.push(rows);
    }
    console.log(this.minefield);
    for(var j = 0; j < 12; j++){
      for(var jj = 0; jj < 12; jj++){
        if(this.minefield.columns[j][jj].bomb === true){
          if(this.minefield.columns[j - 1] === undefined){
          } else {
            if(this.minefield.columns[j - 1][jj - 1] === undefined){
            } else {
              this.minefield.columns[j - 1][jj - 1].count++;
            }
            this.minefield.columns[j - 1][jj].count++;
            if(this.minefield.columns[j - 1][jj + 1] === undefined){
            } else {
              this.minefield.columns[j - 1][jj + 1].count++;
            }
          }
          if (this.minefield.columns[j][jj - 1] === undefined){
          } else {
            this.minefield.columns[j][jj - 1].count++;
          }
          if (this.minefield.columns[j][jj + 1] === undefined){
          } else {
            this.minefield.columns[j][jj + 1].count++;
          }
          if(this.minefield.columns[j + 1] === undefined){
          } else {
            if(this.minefield.columns[j + 1][jj - 1] === undefined){
            } else {
              this.minefield.columns[j + 1][jj - 1].count++;
            }
            this.minefield.columns[j + 1][jj].count++;
            if(this.minefield.columns[j + 1][jj + 1] === undefined){
            } else {
              this.minefield.columns[j + 1][jj + 1].count++;
            }
          }
        }
      }
    }
  }

  onClick(tile: Tile){
    alert("HEY");
  }
}
