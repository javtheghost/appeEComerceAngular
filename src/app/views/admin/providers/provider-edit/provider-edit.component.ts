import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router'
import { ApiService } from 'src/app/services/api/api.service';
import { ProviderI } from '../../../../models/ProviderI.interface' //ruta para los datos que editaremos
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-provider-edit',
  templateUrl: './provider-edit.component.html',
  styleUrls: ['./provider-edit.component.css']
})
export class ProviderEditComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService) { }



  ngOnInit(): void {

  }

  getToken(){
    return localStorage.getItem('token')
  }
}
