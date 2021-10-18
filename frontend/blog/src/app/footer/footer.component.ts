import { Component, OnInit } from '@angular/core';
import { faInstagram, faFacebook, faLinkedin, faTwitter, faYoutube, faSoundcloud, faFlickr } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faInstagram = faInstagram
  faFacebook = faFacebook
  faLinkedin = faLinkedin
  faTwitter = faTwitter
  faYoutube = faYoutube
  faSoundcloud = faSoundcloud
  faFlickr = faFlickr

  constructor() { }

  ngOnInit(): void {
  }

}
