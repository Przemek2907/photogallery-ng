import {Component, HostListener, OnInit} from '@angular/core';
import {Album} from '../../model/Album';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  albums: Album[];

  constructor() { }

  ngOnInit(): void {
    this.albums = [];
    const singleAlbum: Album = {
      id: 1,
      title: 'First album',
      subtitle: 'Subtitle',
      description: 'Description',
    };
    this.albums.push(singleAlbum);
    this.albums.push(singleAlbum);
    this.albums.push(singleAlbum);
    this.albums.push(singleAlbum);
    this.albums.push(singleAlbum);
    this.albums.push(singleAlbum);
  }

}
