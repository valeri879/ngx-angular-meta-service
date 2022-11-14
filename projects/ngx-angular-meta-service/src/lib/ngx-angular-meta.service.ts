import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable()
export class NgxAngularMetaService {

	private _baseUrl: string = this._document.baseURI;
	
	constructor(
		@Inject(DOCUMENT) private _document: Document,
		private _title: Title,
		private _meta: Meta,
		private _router: Router
	) {
	}

	public update(
		title: string,
		description: any,
		img?: string,
		twitterUserName?: string,
		twitterCreatorName?: string,
		author: string = this._baseUrl
	) {
		/* page title */
		this._title.setTitle(title);
		/* meta tags */
		this._meta.updateTag({ name: 'description', content: `${description.replace(/(<([^>]+)>)/gi, "").slice(0, 145)}...` });
		this._meta.updateTag({ name: 'author', content: author });
		/* open graph */
		this._meta.updateTag({ name: 'og:title', content: title });
		this._meta.updateTag({ name: 'og:description', content: `${description.replace(/(<([^>]+)>)/gi, "").slice(0, 145)}...` });
		this._meta.updateTag({ name: 'og:url', content: `${this._baseUrl}${this._router.url.slice(1)}` });
		this._meta.updateTag({ name: 'og:image', content: img || `${this._baseUrl}assets/social.jpg` });
		this._meta.updateTag({ name: 'image', property: 'og:image', content: img || `${this._baseUrl}assets/social.jpg` });
		/* twitter */
		this._meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
		this._meta.updateTag({ name: 'twitter:site', content: twitterUserName || ''});
		this._meta.updateTag({ name: 'twitter:creator', content: twitterCreatorName || '' });
		this._meta.updateTag({ name: 'twitter:title', content: title });
		this._meta.updateTag({ name: 'twitter:description', content: `${description.replace(/(<([^>]+)>)/gi, "").slice(0, 145)}...` });
		this._meta.updateTag({ name: 'twitter:url', content: `${this._baseUrl}${this._router.url.slice(1)}` });
		this._meta.updateTag({ name: 'twitter:image', content: img || `${this._baseUrl}assets/social.jpg` });
	}
}
