import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1> {{name}}</h1>
                <test-app></test-app>`,
})
export class AppComponent  { name = 'Two way data binding'; }
