import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-show-pdf-modal',
  templateUrl: './show-pdf-modal.component.html',
  styleUrls: ['./show-pdf-modal.component.scss']
})
export class ShowPdfModalComponent implements OnInit {

  @ViewChild('frame', {static: false}) frame;
  spinnerStatus = false;
  constructor() { }

  ngOnInit() {
  }

  show() {
    this.frame.show();
  }
}
