import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AdmissionComponent } from './components/admission/admission.component';
import { KomalComponent } from './components/komal/komal.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AlertComponent } from './components/alert/alert.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavComponent } from './components/nav/nav.component';
import { OffcanvasComponent } from './components/offcanvas/offcanvas.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PopoverComponent } from './components/popover/popover.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { RatingComponent } from './components/rating/rating.component';
import { ScrollspyComponent } from './components/scrollspy/scrollspy.component';
import { TableComponent } from './components/table/table.component';
import { ToastComponent } from './components/toast/toast.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    AdmissionComponent,
    KomalComponent,
    AccordionComponent,
    AlertComponent,
    CarouselComponent,
    CollapseComponent,
    DropdownComponent,
    ModalComponent,
    NavComponent,
    OffcanvasComponent,
    PaginationComponent,
    PopoverComponent,
    ProgressbarComponent,
    RatingComponent,
    ScrollspyComponent,
    TableComponent,
    ToastComponent,
    TooltipComponent,

 ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
