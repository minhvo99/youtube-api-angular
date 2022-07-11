import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { YoutubeService } from './../../services/youtube.service';

@Component({
  selector: 'app-video-search-result',
  templateUrl: './video-search-result.component.html',
  styleUrls: ['./video-search-result.component.scss']
})
export class VideoSearchResultComponent implements OnInit, OnDestroy {

  public Videos : any[] = []

  public Detail : any[] = []

  subscription! : Subscription

  constructor(private youtubeServices : YoutubeService) { }

  ngOnInit(): void {
    this.subscription= this.youtubeServices.getVideo().subscribe((item : any)=> {
      this.Videos = item;
    })
  }
  getVideo(id: string){
    this.youtubeServices.getDetailViewVideo(id).subscribe((data : any)=> {
      this.Detail = data.items; 
      this.youtubeServices.sendDetailViewer(this.Detail)
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
