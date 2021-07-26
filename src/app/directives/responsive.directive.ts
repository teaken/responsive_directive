import { InvokeFunctionExpr } from '@angular/compiler';
import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResizeService } from '../resize.service';

@Directive({
  selector: '[responsive]'
})
export class ResponsiveDirective implements OnInit{
  resizeSubscribtion$: Subscription;
  showElement: boolean = false;
  constructor(private resizeService: ResizeService, private el: ElementRef) { }

  @Input() size: string;
  ngOnInit() {
    this.responsiveToggle(this.el.nativeElement.offsetWidth);
    this.resizeSubscribtion$ = this.resizeService.resize.subscribe((val : any) =>
    {
      this.responsiveToggle(val.currentTarget.innerWidth)
    }
   )
  }
  //ამ თასქს კლასებით ვიზამდი და არა ასე პირდაპირ სტილებით
  responsiveToggle(width: number){
    this.el.nativeElement.style.display = 'none'
    if(width < 960 && this.size=== 'sm'){
      this.el.nativeElement.style.display = 'block'
    } else if(width >= 960 && width < 1280 && this.size=== 'md'){
      this.el.nativeElement.style.display = 'block'
    } else if(width > 1280 && this.size=== 'lg'){
      this.el.nativeElement.style.display = 'block'
    }
  }

  ngOnDestroy() {
    this.resizeSubscribtion$.unsubscribe()
}
}

