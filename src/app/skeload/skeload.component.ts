import {
  AfterContentInit,
  Component,
  ComponentFactoryResolver, ContentChild, EmbeddedViewRef,
  Input, OnChanges,
  ViewContainerRef,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-skeload',
  templateUrl: './skeload.component.html',
  styleUrls: ['./skeload.component.scss']
})
export class SkeloadComponent implements AfterContentInit, OnChanges {
  @Input() skeletonComponent: any;
  @Input() skeletonData: any;
  @Input() skeletonCount: number = 1;
  @Input() skeletonClass: string;
  @Input() skeletonStop: boolean;
  @ContentChild('skeloader', {read: ViewContainerRef}) skeloader: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.skeletonStop) {
      this.skeloader.clear();
    }
  }

  ngAfterContentInit(): void {
    if (!this.skeletonStop) {
      this.showSkeleton();
    }
  }

  showSkeleton() {
    this.skeloader.clear();
    for (let x = 0; x < this.skeletonCount; x++) {
      const childComponent = this.componentFactoryResolver.resolveComponentFactory(this.skeletonComponent);
      let componentRef = this.skeloader.createComponent(childComponent);
      componentRef.instance[childComponent.inputs[0].propName] = this.skeletonData;
      const rootElm = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      rootElm.classList.add(this.skeletonClass);
      this.showLoaders(rootElm);
    }
  }

  showLoaders(rootElm) {
    const APPLIED_ELEMENTS = ['H1','H2','H3','H4','H5','H6','IMG','P'];
    const childElms = rootElm.getElementsByTagName("*")
    for (let item of childElms) {
      if (APPLIED_ELEMENTS.includes(item.tagName)) {
        item.classList.add('skeloading')
      }
    }
  }
}
