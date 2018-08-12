import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from "@angular/material";

import { NewsPopupDialogComponent } from '../news-popup-dialog/news-popup-dialog.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../app.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1
      , title: 'Angular For Beginners'
      , content: 'yadda yadda yadda yadda yadda yadda yadda yadda yadda yadda yadda yadda yadda yadda yadda yadda'
      , imgUrl: '../../assets/images/books.jpg'
  };

    this.dialog.open(NewsPopupDialogComponent, dialogConfig);
  }

  ngOnInit() {
  }

}
