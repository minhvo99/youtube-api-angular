import { Component, OnInit } from '@angular/core';

import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  videos : any[] = []

  constructor(private yotubeServices : YoutubeService) { }

  ngOnInit(): void {
  }
  search(queryString :string){
    this.yotubeServices.getVideoList(queryString).subscribe((data : any)=> {
      this.videos = data.items;
      this.yotubeServices.sendListVideo(this.videos)
    })
  }

}
