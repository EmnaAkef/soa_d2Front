import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';
import { CommonModule } from '@angular/common';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-films',
  imports: [CommonModule],
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent implements OnInit {
  films! : Film[]; 
     
     constructor(private filmService: FilmService ) {
      
      }
   

      ngOnInit(): void {

        this.chargerFilms();
      }
    
      chargerFilms(){
        this.filmService.listeFilm().subscribe(flms => {
          console.log(flms);
          this.films = flms;
          });
      }
   

}
