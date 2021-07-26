import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';

@Injectable()
export class ResizeService {

 
  resize = fromEvent(window, 'resize');
}
