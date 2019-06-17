import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';
import { BlankComponent } from '../shared/layouts/blank/blank.component';
import { FullComponent } from '../shared/layouts/full/full.component';
import { SpinnerComponent } from '../shared/spinner.component';
import { ButtonLoaderComponent } from '../shared/button-loader';
import { FormErrorWrapperComponent } from '../shared/form-error-wrapper/form-error-wrapper.component';
import { MaterialPartsModule } from 'src/buildingblocks/materialparts.modules';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialPartsModule
  ],
  declarations: [
    SpinnerComponent,
    BreadcrumbComponent,
    BlankComponent,
    FullComponent,
    ButtonLoaderComponent,
    FormErrorWrapperComponent
  ],
  exports: [
    SpinnerComponent,
    BreadcrumbComponent,
    BlankComponent,
    FullComponent,
    ButtonLoaderComponent,
    FormErrorWrapperComponent,
    MaterialPartsModule,
    FlexLayoutModule
  ],
  entryComponents: [],
  providers: []
})
export class SharedModule {}
