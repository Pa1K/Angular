import { Component, OnInit,Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, ViewChild, ElementRef, ContentChild } from '@angular/core';
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
  @ViewChild('heading') header: ElementRef;
  @ContentChild('paragraph') content:ElementRef;
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
    console.log("Heading data :"+ this.header.nativeElement.textContent);
    console.log("Paragraph content data :"+ this.content.nativeElement.textContent);

  }

  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log("Paragraph content data :"+ this.content.nativeElement.textContent);
  }
  ngOnDestroy(){
    console.log('ngOnDestroy called');
}
  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
    console.log("Heading data: "+ this.header.nativeElement.textContent);
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');

  }
 
}
