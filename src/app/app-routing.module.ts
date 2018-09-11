import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './input/input.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { RadiobuttonComponent } from 'src/app/radiobutton/radiobutton.component';
import { CheckboxComponent } from 'src/app/checkbox/checkbox.component';
import { CalendarComponent } from 'src/app/calendar/calendar.component';
import { ButtonComponent } from 'src/app/button/button.component';
import { TooltipComponent } from 'src/app/tooltip/tooltip.component';
import { OrderListComponent } from './orderlist/orderlist.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'Input', component: InputComponent },
      { path: 'Dropdown', component: DropdownComponent },
      { path: 'Radio', component: RadiobuttonComponent },
      { path: 'Checkbox', component: CheckboxComponent },
      { path: 'Calendar', component: CalendarComponent },
      { path: 'Button', component: ButtonComponent },
      { path: 'Tooltip', component: TooltipComponent },
      { path: 'OrderList', component: OrderListComponent }
    ])
  ],
  exports:  [RouterModule]
})
export class AppRoutingModule { }
