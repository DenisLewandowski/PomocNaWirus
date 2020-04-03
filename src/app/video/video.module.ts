import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {YouTubePlayerModule} from '@angular/youtube-player';
import {VideoComponent} from './video.component';


@NgModule({
  declarations: [VideoComponent],
  exports: [
    VideoComponent
  ],
  imports: [
    CommonModule,
    YouTubePlayerModule
  ]
})
export class VideoModule {
}
