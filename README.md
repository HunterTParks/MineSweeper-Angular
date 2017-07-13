# Msclone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

ngOnInit() {
  for(var i = 0; i < 12; i ++){
    var rows = [];
    for(var ii = 0; ii < 12; ii ++){
      var newTile: Tile = new Tile();
      var rng = Math.floor(Math.random() * 10) + 1;
      if(rng > 7){
        newTile.bomb = true;
      }
      rows.push(newTile);
    }
    this.minefield.columns.push(rows);
  }
  console.log(this.minefield);
  for(var j = 0; j <= 12; j++){
    for(var jj = 0; jj <= 12; jj++){
      if(this.minefield.columns[j][jj].bomb === true){
        // if(this.minefield.columns[j - 1][jj - 1] === undefined){
        // } else {
          this.minefield.columns[j - 1][jj - 1].count++;
        // }
        // if(this.minefield.columns[j - 1][jj] === undefined){
        // } else {
          this.minefield.columns[j - 1][jj].count++;
        // }
        // if (this.minefield.columns[j - 1][jj +1] === undefined){
        // } else {
          this.minefield.columns[j - 1][jj + 1].count++;
        // }
        // if (this.minefield.columns[j][jj - 1] === undefined){
        // }else {
          this.minefield.columns[j][jj - 1].count++;
        // }
        // if (this.minefield.columns[j][jj + 1] === undefined) {
        // } else {
          this.minefield.columns[j][jj + 1].count++;
        // }
        // if (this.minefield.columns[j + 1][jj - 1] === undefined) {
        // } else {
          this.minefield.columns[j + 1][jj - 1].count++;
        // }
        // if (this.minefield.columns[j + 1][jj] === undefined) {
        // } else {
          this.minefield.columns[j + 1][jj].count++;
        // }
        // if (this.minefield.columns[j + 1][jj + 1] === undefined){
        // }else {
          this.minefield.columns[j + 1][jj + 1].count++;
        // }

      }
    }
  }
}
