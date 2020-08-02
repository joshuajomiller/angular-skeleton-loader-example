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
  @Input() component: any;
  @Input() data: any;
  @Input() count: number = 1;
  @Input() class: string;
  @Input() stop: boolean;
  @ContentChild('skeloader', {read: ViewContainerRef}) skeloader: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.stop) {
      this.skeloader.clear();
    }
  }

  ngAfterContentInit(): void {
    if (!this.stop) {
      this.showSkeleton();
    }
  }

  showSkeleton() {
    this.skeloader.clear();
    for (let x = 0; x < this.count; x++) {
      // create a skeleton using the base component with componentFactoryResolver
      const childComponent = this.componentFactoryResolver.resolveComponentFactory(this.component);
      // insert component into <ng-template #skeloader></ng-template>
      let componentRef = this.skeloader.createComponent(childComponent);
      // set initial blank data
      componentRef.instance[childComponent.inputs[0].propName] = this.data;
      // get rootNode of component
      const rootElm = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      // apply styles
      rootElm.classList.add(this.class);
      this.showLoaders(rootElm);
    }
  }

  showLoaders(rootElm) {
    // list of elements we will apply skeleton to
    const APPLIED_ELEMENTS = ['H1','H2','H3','H4','H5','H6','IMG','P'];
    // apply skeleton styles to relevant child elements
    const childElms = rootElm.getElementsByTagName("*")
    for (let item of childElms) {
      if (APPLIED_ELEMENTS.includes(item.tagName)) {
        item.classList.add('skeloading')
      }
    }
  }
}
