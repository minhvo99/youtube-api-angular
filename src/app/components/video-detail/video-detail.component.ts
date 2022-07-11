import { Component, OnInit } from '@angular/core';

import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent implements OnInit {
  
  public Detail : any[] = []

  public URL:string = 'https://www.youtube.com/embed/'

  constructor(private youTubeServices : YoutubeService) { }

  ngOnInit(): void {
    this.youTubeServices.getViewer().subscribe(data => {
      this.Detail = data 
    })
  }

}
