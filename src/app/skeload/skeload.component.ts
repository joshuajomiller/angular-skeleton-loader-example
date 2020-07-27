import {
  AfterContentInit,
  Component,
  ComponentFactoryResolver, ContentChild, EmbeddedViewRef,
  Input,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-skeload',
  templateUrl: './skeload.component.html',
  styleUrls: ['./skeload.component.scss']
})
export class SkeloadComponent implements AfterContentInit {
  @Input() skeletonComponent: any;
  @Input() skeletonData: any;
  @Input() skeletonCount: number = 1;
  @Input() skeletonClass: string;
  @ContentChild('skeloader', {read: ViewContainerRef}) skeloader: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngAfterContentInit(): void {
    for (let x = 0; x < this.skeletonCount; x++) {
      const childComponent = this.componentFactoryResolver.resolveComponentFactory(this.skeletonComponent);
      let componentRef = this.skeloader.createComponent(childComponent);
      componentRef.instance[childComponent.inputs[0].propName] = this.skeletonData;
      const rootElm = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      rootElm.classList.add(this.skeletonClass);
      this.showLoader(rootElm);
    }
  }

  showLoader(rootElm) {
    const childElms = rootElm.getElementsByTagName("*")
    for (let item of childElms) {
      switch (item.tagName) {
        case 'H1':
        case 'H2':
        case 'H3':
        case 'H4':
        case 'H5':
        case 'H6':

          break;
        case 'P':

          break;

      }
    }
  }
}
