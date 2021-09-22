import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  public scroll: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
