import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../../model/personne';
import {EmbauchesService} from "../../services/embauches.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne = null;
  constructor(private embaucheService: EmbauchesService) {}

  ngOnInit(): void {}

  embaucher(event: any) {
    event.target.disabled = true;
    this.embaucheService.embaucherPersonne(this.personne);
  }

}
