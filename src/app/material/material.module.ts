import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatCheckboxModule
  ],
  exports: [
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
