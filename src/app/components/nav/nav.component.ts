import { Component } from '@angular/core';
import { NgbNavConfig, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav',
	// standalone: true,
	// imports: [NgbNavModule],

  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
	constructor(config: NgbNavConfig) {
		// customize default values of navs used by this component tree
		config.destroyOnHide = false;
		config.roles = false;
	}

}
