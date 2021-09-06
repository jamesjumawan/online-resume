import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-balls',
  templateUrl: './balls.component.html',
  styleUrls: ['./balls.component.css']
})
export class BallsComponent implements OnInit, AfterViewInit {

  public one:any;

  constructor() {
  }

  ngOnInit(): void {
  }

  @ViewChild('one') ballOne:any;

  ngAfterViewInit(): void {
    this.one = this.ballOne.nativeElement;
  }

  @HostListener('window:scroll', []) onscroll(event:any){

  }

  testFunc(){
    this.one.classList.value = 'ball one-about';

    console.log(this.one.classList);
    
  }


}
