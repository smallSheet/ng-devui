import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'ng-devui/button';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox';
import { TextInputModule } from 'ng-devui/text-input';
import { TranslateModule } from '@ngx-translate/core';
import { DDemoNavModule } from 'src/app/component/d-demo-nav.module';
import { ModalModule } from '../modal.module';
import { AutofocusComponent } from './autofocus/autofocus.component';
import { BasicUpdateComponent } from './basic-update/basic-update.component';
import { BasicComponent } from './basic/basic.component';
import { ModalTestComponent } from './basic/modal-test.component';
import { CustomizeComponent } from './customize/customize.component';
import { ModalAlertComponent } from './customize/modal-alert.component';
import { FixedWrapperComponent } from './fixed/fixed-wrapper.component';
import { HideComponent } from './hide/hide.component';
import { ModalFormComponent } from './hide/modal-form.component';
import { ModalDemoComponent } from './modal-demo.component';
import { DialogContentComponent } from './template/dialog-content/dialog-content.component';
import { ModalContentComponent } from './template/modal-content/modal-content.component';
import { TemplateComponent } from './template/template.component';
import { TipsComponent } from './tips/tips.component';
import { WarningComponent } from './warning/warning.component';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    ModalModule,
    ButtonModule,
    DevUICodeboxModule,
    DevUIApiModule,
    DDemoNavModule,
    TextInputModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'demo' },
      { path: 'demo', component: ModalDemoComponent },
      {
        path: 'api',
        component: DevUIApiComponent,
        data: {
          'zh-cn': require('!html-loader!markdown-loader!../doc/api-cn.md'),
          'en-us': require('!html-loader!markdown-loader!../doc/api-en.md'),
        },
      },
    ]),
  ],
  declarations: [
    ModalDemoComponent,
    ModalTestComponent,
    ModalAlertComponent,
    BasicComponent,
    CustomizeComponent,
    TipsComponent,
    HideComponent,
    ModalFormComponent,
    WarningComponent,
    AutofocusComponent,
    TemplateComponent,
    DialogContentComponent,
    ModalContentComponent,
    BasicUpdateComponent,
    FixedWrapperComponent
  ],
  
})
export class ModalDemoModule {}
