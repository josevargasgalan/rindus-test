import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [MatMenuModule, MatButtonModule],
  providers: [],
  exports: [MenuComponent]
})
export class MenuComponentModule { }
