import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { getProvidersI } from 'src/app/models/Provider.interface';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { ProviderI } from 'src/app/models/ProviderI.interface';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {

  provider:ProviderI = new ProviderI();
  providers:any = [];

  constructor(private providerService:ApiService){

  }

  ngOnInit(): void {
    this.onDataProvidersTable();
  }

  onDataProvidersTable(){
    this.providerService.getProviders().subscribe(res => {
      this.providers = res;
    });
  }

    postProvider(provider:ProviderI):void{
    this.providerService.postProvider(provider).subscribe(res => {
      if(res){
        alert(`La mascota ${provider.nombre} se ha registrado con exito!`);
        this.clear();
        this.onDataProvidersTable();
      } else {
        alert('Error! :(')
      }
    });
  }

  onUpdateProvider(provider:ProviderI):void{
    this.providerService.updateProvider(this.provider.id, this.provider).subscribe(res => {
      if(res){
        alert(`La mascota número ${provider.id} se ha modificado con exito!`);
        this.clear();
        this.onDataProvidersTable();
      } else {
        alert('Error! :(')
      }
    });
  }

  onDeleteProvider(id:number):void{
    this.providerService.deleteProvider(id).subscribe(res => {
      if(res){
        alert(`El provider número ${id} se ha eliminado con exito!`);
        this.clear();
        this.onDataProvidersTable();
      } else {
        alert('Error! :(')
      }
    });
  }

  onSetData(select:any){
    this.provider.id = select.id;
    this.provider.nombre = select.nombre;
    this.provider.direccion = select.direccion;
    this.provider.correo = select.correo;
  }

  clear(){
    this.provider.id = 0;
    this.provider.nombre = "";
    this.provider.direccion = "";
    this.provider.correo = "";
  }
}
