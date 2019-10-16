import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { StorageService } from './storage.service';

export interface Character {
  name: string;
  gender: string;
  hair: string;
  eyes: string;
  height: string;
  mass: string;
  skin: string;
}

export interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
}

export interface Starship {
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
}

export interface Response {
  results: any;
}

const CHARACTERS_SESSION_KEY = 'characters';
const PLANETS_SESSION_KEY = 'planets';
const STARSHIPS_SESSION_KEY = 'starships';

@Injectable({ providedIn: 'root' })

export class AppService {  
  constructor(private http: HttpClient, private storageService: StorageService) {}

  checkLoadStatus(SESSION_KEY: string) {
    const loaded = JSON.parse(this.storageService.getFromSession(SESSION_KEY));
    return loaded;
  }


  getCharacters(): Observable<Character[]> {
    const characters_session = [];
    const endpoint = `https://swapi.co/api/people`;
    const characters = this.http.get<Response>(endpoint).pipe(
      map(res => res.results.map((item: any) => {
        characters_session.push(item);        
        return {
          name: item.name,
          gender: item.gender,
          hair_color: item.hair_color,
          eye_color: item.eye_color,
          height: item.height,
          mass: item.mass,
          skin_color: item.skin_color
        };
      })),
      tap(() => this.storageService.saveInSession(CHARACTERS_SESSION_KEY, JSON.stringify(characters_session)))
    );
    return characters;
  }


  getPlanets(): Observable<Planet[]> {
    const planets_session = [];
    const endpoint = `https://swapi.co/api/planets`;
    const planets = this.http.get<Response>(endpoint).pipe(
      map(res => res.results.map((item: any) => {
        planets_session.push(item);        
        return {
          name: item.name,
          rotation_period: item.rotation_period,
          orbital_period: item.orbital_period,
          diameter: item.diameter,
          climate: item.climate,
          gravity: item.gravity,
          terrain: item.terrain,
          surface_water: item.surface_water,
          population: item.population
        };
      })),
      tap(() => this.storageService.saveInSession(PLANETS_SESSION_KEY, JSON.stringify(planets_session)))
    );
    return planets;
  }


  getStarships(): Observable<Starship[]> {
    const planets_session = [];
    const endpoint = `https://swapi.co/api/starships`;
    const planets = this.http.get<Response>(endpoint).pipe(
      map(res => res.results.map((item: any) => {
        planets_session.push(item);        
        return {
          name: item.name,
          model: item.model,
          starship_class: item.starship_class,
          manufacturer: item.manufacturer,
          cost_in_credits: item.cost_in_credits,
          length: item.length,
          crew: item.crew,
          passengers: item.passengers,
          cargo_capacity: item.cargo_capacity,
          consumables: item.consumables,
          hyperdrive_rating: item.hyperdrive_rating
        };
      })),
      tap(() => this.storageService.saveInSession(STARSHIPS_SESSION_KEY, JSON.stringify(planets_session)))
    );
    return planets;
  }
}