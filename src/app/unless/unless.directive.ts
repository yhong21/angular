import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition:boolean){
if(!condition){
this.vfRef.createEmbeddedView(this.templateRef);
}
else{
this.vfRef.clear();
}
  }


  constructor(private templateRef:TemplateRef<any>, private vfRef:ViewContainerRef){ }

}
