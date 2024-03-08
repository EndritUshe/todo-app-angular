import { AfterContentChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy, AfterContentChecked {

  constructor(){
    console.log('the constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('OnInit');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

    title = 'todo-app';
    greet(){
      alert('Alert!!!!')
    }

}

// import { AfterContentChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy, AfterContentChecked {

//   constructor(){
//   console.log('the constructor');
// }
// ngOnChanges(changes: SimpleChanges): void {
//   console.log(changes);
// }
// ngOnInit(): void {
//   console.log('OnInit');
// }
// ngAfterViewInit(): void {
//   console.log('AfterViewInit');
// }
// ngOnDestroy(): void {
//   console.log('ngOnDestroy');
// }
// ngAfterContentChecked(): void {
//   console.log('ngAfterContentChecked');
// }

//   title = 'todo-app';
//   greet(){
//     alert('Alert!!!!')
//   }
// }

// //Nodejs nje environment qe ben te mundur exekutimin e javascript jashte browser.
// // Module sherben per te grupuar componente
// // Components -- selector(emri i nje tagu)
// // Qe nje component te jete pjese e nje moduli duhet qe emri i component te jete pjese e array te modulit - declaration array.
// //Data binding : String interpolation {} ; Property binding [] ---- 1 way binding
// // 2 way binding [(ngModel)] -- banana boxing --- komunikim i nderlidhur midis template dhe controller
// //Directive (@Directive) jane klasa qe nuk kane perfaqesim UI dhe sherbejne per additional behaviour to the HTML code.
// // Directive mund te jene ----Attribute [(ngModel)] , -----Structurore: ngIf & ngFor, ----component
