import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Song } from './song';

@Injectable()
export class SongService {
	private songsUrl = '/api';

	constructor(private http: HttpClient) { }

	getSongs(): Observable<Song[]> {
		return this.http.get<Song[]>(this.songsUrl);
	}
}
