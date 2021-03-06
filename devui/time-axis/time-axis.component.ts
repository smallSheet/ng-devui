import { AfterViewInit, Component, ElementRef, Input, OnChanges, TemplateRef } from '@angular/core';
import { TimeAxisData } from './time-axis.type';

@Component({
  selector: 'd-time-axis',
  templateUrl: './time-axis.component.html',
  styleUrls: [`./time-axis.component.scss`],
  exportAs: 'time-axis',
  preserveWhitespaces: false,
})

export class TimeAxisComponent implements AfterViewInit, OnChanges {
  @Input() data: TimeAxisData = {
      position: 'bottom', // 如果为bottom时，才生效；
      model: 'text', // text/html/template
      list: []
  };

  private viewRenderComplete = false;

  @Input() contentTemplate: TemplateRef<any>;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit() {
    Promise.resolve(null).then(() => {
      this.viewRenderComplete = true;
    });
  }

  ngOnChanges() {
    this.viewRenderComplete = false;
    Promise.resolve(null).then(() => {
      this.viewRenderComplete = true;
    });
  }

  get bottomPositionMarginLeft() {
    const timeElement = this.elementRef.nativeElement.querySelector('.devui-time-axis.bottom .devui-axis-time-time > div');
    const ICON_WIDTH_PX = 20;
    return timeElement && this.viewRenderComplete ? timeElement.offsetWidth / 2 - ICON_WIDTH_PX / 2 : 0;
  }

  get bottomPositionTextLeft() {
    const timeElement = this.elementRef.nativeElement.querySelector('.devui-time-axis.bottom .devui-axis-time-time');
    return timeElement && this.viewRenderComplete ? -timeElement.offsetWidth / 2 : 0;
  }
}
