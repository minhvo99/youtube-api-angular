import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  public listVideo = new Subject<any>()

  public detailVideo = new Subject<any>()
  
  public API_KEY = "AIzaSyD2odFEZ0D2uqV822fzJup75-bBCo__qfY";

  //public TOKEN = "Bearer 693465831962-9dts44kfejaa2hiob2golfdqth6dtv2p.apps.googleusercontent.com"
  constructor(private http: HttpClient) { }

  public httpOptions = {

    headers: new HttpHeaders({
      'Accept': 'application/json'
    })
  }
  //search video
  getVideoList(searchQuery: string): Observable<any>{
    let URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&key=${this.API_KEY}`;
    return this.http.get<any>(URL, this.httpOptions)
  }

  sendListVideo(data: any){
    this.listVideo.next(data);
  }

  getVideo(){
    return this.listVideo.asObservable();
  }
  /// preview video
  getDetailViewVideo(id : string) :Observable<any>{
    let URL = `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&part=snippet&id=${id}&key=${this.API_KEY}`;
    return this.http.get<any>(URL,this.httpOptions )
  }
  sendDetailViewer(data : any){
    this.detailVideo.next(data);
  }
  getViewer(){
    return this.detailVideo.asObservable()
  }
  //Paginations
  
}
