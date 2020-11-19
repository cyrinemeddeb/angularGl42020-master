import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../../model/personne';
import {EmbauchesService} from '../../services/embauches.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {
  personnesEmbauchees: Personne[] = [];

  constructor(private embaucheService: EmbauchesService) {
  }

  ngOnInit(): void {
    this.personnesEmbauchees = this.embaucheService.getPersonnesEmbauchees();
  }


}
