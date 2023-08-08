import { Injectable } from '@angular/core';
import {LocationEntity} from "../../models/entity/general/location.entity";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  currentLocation = async (): Promise<LocationEntity | null> => {
    return new Promise<LocationEntity | null>((resolve) => {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
          (position) => {
            const location: LocationEntity = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              name: position.coords.accuracy.toString()
            };
            resolve(location);
          },
          (err) => {
            console.log(err);
            resolve(null);
          }
        );
      } else {
        resolve(null);
      }
    });
  }
}
