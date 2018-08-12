import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-news-popup-dialog',
  templateUrl: './news-popup-dialog.component.html',
  styleUrls: ['./news-popup-dialog.component.css']
})
export class NewsPopupDialogComponent implements OnInit {

  title: string = "";
  content: string = "";
  imgUrl: string = "";

  constructor(private dialogRef: MatDialogRef<NewsPopupDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.title = data.title;
    this.content = data.content;
    this.imgUrl = data.imgUrl;
  }

  close() {
    this.dialogRef.close();
  }
  

  ngOnInit() {
  }

}
