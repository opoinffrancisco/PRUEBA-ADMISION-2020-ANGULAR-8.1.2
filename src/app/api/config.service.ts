import { Injectable } from '@angular/core';

@Injectable()
export class configService {

    public url_servidor = '';

    constructor() {

        this.url_servidor = "http://jsonplaceholder.typicode.com";

    }

}
