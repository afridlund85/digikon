import { Component } from '@angular/core';

@Component({
  selector: 'HeaderComponent',
  templateUrl: './header.html',
})
export class HeaderComponent  {

		name = 'Angular';

		getHeader = function(){
			return 'Header asd';
		}

}
