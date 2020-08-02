import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profiles = [
    {
      image: 'assets/tim-cook.jpg',
      name: 'Tim Cook',
      bio: `Timothy Donald Cook (born November 1, 1960) is an American business executive, philanthropist and industrial
       engineer. Cook is the chief executive officer of Apple Inc., and previously served as the company's chief
       operating officer under its cofounder Steve Jobs`
    },
    {
      image: 'assets/satya-nadella.jpg',
      name: 'Satya Nadella',
      bio: `Satya Narayana Nadella (born 19 August 1967) is an Indian-American business executive. He is the chief
       executive officer (CEO) of Microsoft, succeeding Steve Ballmer in 2014. Before becoming CEO, he was the
       executive vice president of Microsoft's cloud and enterprise group, responsible for building and running the
        company's computing platforms.`
    },
    {
      image: 'assets/susan-wojcicki.jpg',
      name: 'Susan Wojcicki',
      bio: `Wojcicki was involved in the founding of Google, and became Google's first marketing manager in 1999. She
       later led the company's online advertising business and was put in charge of Google's original video service.
       After observing the success of YouTube, Wojcicki proposed the acquisition of YouTube by Google in 2006, and has
       served as CEO of YouTube since 2014.`
    },
    {
      image: 'assets/elon-musk.jpg',
      name: 'Elon Musk',
      bio: `Elon Reeve Musk FRS (born June 28, 1971) is an engineer, industrial designer, technology entrepreneur and
       philanthropist. He is the founder, CEO, CTO and chief designer of SpaceX; early investor, CEO and product
       architect of Tesla, Inc.`
    },
  ]

  constructor() { }

  getProfiles() : Observable<Profile[]> {
    return of(this.profiles).pipe(delay(5000));
  }
}

export class Profile {
  image: string;
  name: string;
  bio: string;
}
