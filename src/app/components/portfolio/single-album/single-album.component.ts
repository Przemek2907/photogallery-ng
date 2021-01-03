import {Component, Input, OnInit} from '@angular/core';
import {Album} from '../../../model/Album';

@Component({
  selector: 'app-single-album',
  templateUrl: './single-album.component.html',
  styleUrls: ['./single-album.component.css']
})
export class SingleAlbumComponent implements OnInit {

  @Input() album: Album;

  constructor() { }

  ngOnInit(): void {
  }

}
