# pruebadesarrollo: PRUEBA-ADMISION-2020-ANGULAR-8.1.2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).




## Se debe colocar en el HOOK del VPS luego de desplegar la app desde git   
### #!/bin/bash

### cp /var/www/webroot/ROOT/resources/.htaccess /var/www/webroot/ROOT/www/.htaccess
### cp -R /var/www/webroot/ROOT/www/ /var/www/webroot/ROOT_RESP
### rm -r /var/www/webroot/ROOT
### cp -R  /var/www/webroot/ROOT_RESP /var/www/webroot/ROOT
### rm -r /var/www/webroot/ROOT_RESP
