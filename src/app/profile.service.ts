import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profiles = [
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Tim_Cook_%282017%2C_cropped%29.jpg/220px-Tim_Cook_%282017%2C_cropped%29.jpg',
      name: 'Tim Cook',
      bio: `Timothy Donald Cook (born November 1, 1960) is an American business executive, philanthropist and industrial
       engineer. Cook is the chief executive officer of Apple Inc., and previously served as the company's chief
       operating officer under its cofounder Steve Jobs`
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Satya_smiling-print_%28cropped%29.jpg',
      name: 'Satya Nadella',
      bio: `Satya Narayana Nadella (born 19 August 1967) is an Indian-American business executive. He is the chief
       executive officer (CEO) of Microsoft, succeeding Steve Ballmer in 2014. Before becoming CEO, he was the
       executive vice president of Microsoft's cloud and enterprise group, responsible for building and running the
        company's computing platforms.`
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Susan_Wojcicki_%2829393944130%29.jpg/220px-Susan_Wojcicki_%2829393944130%29.jpg',
      name: 'Susan Wojcicki',
      bio: `Wojcicki was involved in the founding of Google, and became Google's first marketing manager in 1999. She
       later led the company's online advertising business and was put in charge of Google's original video service.
       After observing the success of YouTube, Wojcicki proposed the acquisition of YouTube by Google in 2006, and has
       served as CEO of YouTube since 2014.`
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/220px-Elon_Musk_Royal_Society.jpg',
      name: 'Elon Musk',
      bio: `Elon Reeve Musk FRS (born June 28, 1971) is an engineer, industrial designer, technology entrepreneur and
       philanthropist. He is the founder, CEO, CTO and chief designer of SpaceX; early investor, CEO and product
       architect of Tesla, Inc.`
    },
  ]

  constructor() { }

  getProfiles() : Observable<Profile[]> {
    return of(this.profiles).pipe(delay(2000));
  }
}

export class Profile {
  image: string;
  name: string;
  bio: string;
}
