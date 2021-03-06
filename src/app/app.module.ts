import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { BannerComponent } from './components/banner/banner.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { DescriptionComponent } from './components/description/description.component';
import { OrganizersComponent } from './components/organizers/organizers.component';
import { SubmissiondetailsComponent } from './components/submissiondetails/submissiondetails.component';
import { VenueComponent } from './components/venue/venue.component';
import { CommiteeComponent } from './components/commitee/commitee.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventComponent } from './components/event/event.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CommitteeComponent } from './components/committee/committee.component';
import { HomeComponent } from './components/home/home.component';
import { SpinnerComponentComponent } from './components/spinner-component/spinner-component.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: ':slug', component: EventComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },  // Wildcard route for a 404 page
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BannerComponent,
    SponsorsComponent,
    DescriptionComponent,
    OrganizersComponent,
    SubmissiondetailsComponent,
    VenueComponent,
    CommiteeComponent,
    FooterComponent,
    EventComponent,
    TimelineComponent,
    NavigationComponent,
    CommitteeComponent,
    HomeComponent,
    SpinnerComponentComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MarkdownModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
