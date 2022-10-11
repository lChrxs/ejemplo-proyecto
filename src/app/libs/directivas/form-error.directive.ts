import { AfterContentChecked, Directive, ElementRef, Input, OnInit, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[formError]'
})
export class FormErrorDirective implements OnInit, AfterContentChecked, OnChanges{

  @Input('formError') eMinLength: boolean = false
  @Input('eMaxLength') eMaxLength: boolean = false
  @Input('eRequired') eRequired: boolean = false
  @Input('anchor') anchor?: HTMLElement

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    // console.log(this.eMinLength)
    // if(this.eMinLength){
    //   const div = this.renderer.createElement('div')
    //   const text = this.renderer.createText('Inserted at bottom');
    //   this.renderer.appendChild(div, text);
    //   this.renderer.appendChild(this.element.nativeElement, div);
    // }
  }

  ngAfterContentChecked(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.anchor)
    if(this.eMinLength){
      const div = this.renderer.createElement('div')
      const text = this.renderer.createText('Inserted at bottom');
      this.renderer.appendChild(div, text);
      this.renderer.appendChild(this.anchor, div);
    }
  }
  
  
}
