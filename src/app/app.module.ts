import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PaginationsComponent } from './components/paginations/paginations.component';
import { SearchComponent } from './components/search/search.component';
import { SortComponent } from './components/sort/sort.component';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';
import { VideoSearchResultComponent } from './components/video-search-result/video-search-result.component';
import { DescriptionPipe } from './pipe/description.pipe';
import { TagsPipe } from './pipe/tags.pipe';
import { ViewPipe } from './pipe/view.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SortComponent,
    VideoSearchResultComponent,
    VideoDetailComponent,
    PaginationsComponent,
    DescriptionPipe,
    TagsPipe,
    ViewPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
