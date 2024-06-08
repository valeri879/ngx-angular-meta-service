# ngx angular meta service
**ngx angular meta service** is a package for setting meta tags. With this package, you can easily set meta tags for SEO and social networks.  
For installation, you should run the following command in your terminal window:

    npm i ngx-angular-meta-service@latest --save
Before we start to implement your `NgxAngularMetaService` module into app.module.ts we need to prepare index.html for setting empty tags.  
Copy and paste this code snippets in your `index.html`
```html
  <!-- open graph meta tags -->
  <meta name="og:type" content="website" />
  <meta name="og:title" content="" />
  <meta name="og:description" content="" />
  <meta name="og:url" content="" />
  <meta name="og:image" content="" />
  <meta name="image" content="" />
  <!-- twitter meta tags -->
  <meta name="twitter:card" content="" />
  <meta name="twitter:site" content="" />
  <meta name="twitter:creator" content="" />
  <meta name="twitter:description" content="" />
  <meta name="twitter:url" content="" />
  <meta name="twitter:image" content="" />

```

After installation, you should **import** `NgxAngularMetaService` into your root module.
**app.module.ts**
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxAngularMetaServiceModule } from 'ngx-angular-meta-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxAngularMetaServiceModule // << 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
after importing **app.module.ts** you can use **NgxAngularMetaService** in your components  
For example, here is a code snippet of **app.component.ts**
```typescript
import { Component, OnInit } from '@angular/core';
import { NgxAngularMetaService } from 'ngx-angular-meta-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(
    private _ngxAngularMetaService: NgxAngularMetaService
  ) {
  }

  ngOnInit(): void {
    this._ngxAngularMetaService.update(
      'your page title',
      'your description',
      'img path',
      'your twitter username',
      'twitter creator name',
      'page author or publisher'
    );
  }

}
```
As you see in **app.component.ts** There is only one method known as `.update()`  
which includes six paragraphs, two of which are required and four of which are optional.
|Parameter name | Is optional        | Parameter description |
|---------------|--------------------|-----------------------|
| title         | `false` | page title |
| description   | `false` | page description, you can also send strings with html tags, `regex` automatically removes tags |
| img | `false` | your image path |
| twitterUserName | `true` | @username of website. Either twitter:site or twitter:site:id is required. |
| twitterCreatorName | `true` | @username of content creator |
| author | `false` | page publisher name |

## Versions
| Project Version | Angular Version |
|-----------------|-----------------|
| 0.0.12          | 14.0.0          |
| 0.1.1           | 15.0.0          |
| 0.1.3           | 16.2.12         |

## SSR
you need to use angular server side rendering for this meta services
