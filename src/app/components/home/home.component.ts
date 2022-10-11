import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RickAndMortyApiService } from '../../services/rick-and-morty-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  characters: any

  personajeForm!: FormGroup

  constructor(
    public charactersS: RickAndMortyApiService,
    public router: Router
  ) { }

  ngOnInit(): void {

    this.charactersS.getAllCharacters().subscribe({
      next: (res) => {
        this.characters = res.results
      },
      error: (err) => {
        console.error(err)
      },
      complete: () => console.info('Peticion completa')
    })

    this.personajeForm = new FormGroup({
      personaje: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(40)])
    })

  }

  onSubmit(){
    console.log(this.personajeForm.value.personaje)
    console.log(this.personajeForm.get('personaje')?.hasError('minlength'))
    if(this.personajeForm.valid){
      this.router.navigate(['character', this.personajeForm.get('personaje')?.value])
    }
  }

}
