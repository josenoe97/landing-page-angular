import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'benefits',
  standalone: true,
  imports: [    NgOptimizedImage
  ],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss'
})

export class BenefitComponent {
  @Input("img-path") imgPath: string = '';
  @Input("card-title") cardTitle: string = '';
  @Input("card-description") cardDescription: string = '';
}
