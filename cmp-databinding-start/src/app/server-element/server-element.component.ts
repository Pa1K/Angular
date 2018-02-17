import { Component, OnInit,Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit } from '@angular/core';
import { AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated // None,Native also available
})
export class ServerElementComponent implements 
OnInit, 
OnChanges,
DoCheck, 
AfterContentInit, 
AfterContentChecked, 
AfterViewInit,
AfterViewChecked,
OnDestroy {
 
  @Input('srvElement') element : {type : string, name: string, content: string};
  @Input() name: string;
  constructor() {
    console.log('constructor called');
   }

   ngOnChanges(changes: SimpleChanges) {
     //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
     //Add '${implements OnChanges}' to the class.
     console.log('ngOnChanges called');
     console.log(changes);
     
   }
  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');

  }
  ngOnDestroy(){
    console.log('ngOnDestroy called');
}
  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');

  }
 
}
