import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.scss'],
})
export class DevisComponent implements OnInit {
  form: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl(''),
      mail: new FormControl(''),
      phone: new FormControl(''),
      date: new FormControl(new Date()),
      eventName: new FormControl(''),
      adress: new FormControl(''),
      arriveGroupTime: new FormControl(''),
      stratPrestaTime: new FormControl(''),
      prestaTime: new FormControl(''),
      endPrestaTime: new FormControl(''),
      interieur: new FormControl(false),
      exterieur: new FormControl(false),
      static: new FormControl(false),
      deambulation: new FormControl(false),
      parcours: new FormControl(null),
      bus: new FormControl(false),
      stationnement: new FormControl(''),
      repas: new FormControl(false),
      typeRepas: new FormControl(''),
      biere: new FormControl(false),
      soft: new FormControl(false),
      eau: new FormControl(false),
      autreBoisson: new FormControl(''),
    });
  }
}
