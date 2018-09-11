import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  ButtonModule, GrowlModule, PanelModule, DataTableModule, CalendarModule, CheckboxModule, ScheduleModule,
  DropdownModule, InputTextModule, ContextMenuModule, DialogModule,
  MultiSelectModule, MenuModule, FileUploadModule, OverlayPanelModule, AutoCompleteModule, TreeModule,
  AccordionModule, SidebarModule, DragDropModule, SpinnerModule, RadioButtonModule,
  TabViewModule, EditorModule, CodeHighlighterModule, SplitButtonModule, InputSwitchModule,
  PaginatorModule, TooltipModule, ConfirmDialogModule, OrderListModule, PickListModule
} from 'primeng/primeng';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { NavComponent } from './sideNav/nav.component'
import { InputComponent } from './input/input.component'
import { DropdownComponent } from './dropdown/dropdown.component'
import { RadiobuttonComponent } from './radiobutton/radiobutton.component'
import { CheckboxComponent } from './checkbox/checkbox.component'
import { CalendarComponent } from './calendar/calendar.component'
import { ButtonComponent } from './button/button.component'
import { TooltipComponent } from './tooltip/tooltip.component'
import { OrderListComponent } from './orderlist/orderlist.component'


import { CountryService } from './service/countryservice';
import { EventService } from './service/eventservice';
import { ConfirmationService } from '../assets/common/confirmationservice'
import { Message } from '../assets/common/message'

import 'prismjs/prism';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    InputComponent,
    DropdownComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    CalendarComponent,
    ButtonComponent,
    TooltipComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule, 
    GrowlModule,
    ScheduleModule,
    PanelModule, DataTableModule, CalendarModule,
    DropdownModule, InputTextModule, MultiSelectModule, SpinnerModule,
    ContextMenuModule, DialogModule, CheckboxModule, MenuModule, FileUploadModule,
    TableModule, OverlayPanelModule, AutoCompleteModule, TreeModule, SidebarModule,
    DragDropModule, AccordionModule, MenubarModule, RadioButtonModule,
    TabViewModule, EditorModule, CodeHighlighterModule, SplitButtonModule, InputSwitchModule,
    PaginatorModule, BrowserAnimationsModule, TooltipModule, ConfirmDialogModule, OrderListModule, PickListModule
 ],
  providers: [CountryService, EventService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
