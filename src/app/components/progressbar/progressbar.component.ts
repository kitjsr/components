import { Component } from '@angular/core';
import { NgbProgressbarConfig, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-progressbar',
  // standalone: true,
	// imports: [NgbProgressbarModule],

  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent {
	constructor(config: NgbProgressbarConfig) {
		// customize default values of progress bars used by this component tree
		config.max = 1000;
		config.striped = true;
		config.animated = true;
		config.type = 'success';
		config.height = '20px';
	}

}
