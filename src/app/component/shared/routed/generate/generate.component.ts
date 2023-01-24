import { IncidenciaService } from './../../../../service/incidencia.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { GenerateService } from './../../../../service/generate.service';
import { Component, OnInit } from '@angular/core';
import { MetadataService } from 'src/app/service/metadata.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {
    nUsuarios: number = 0;
    nIncidencias: number = 0;
    bLoading:boolean=false;
    strResult: string = "";

  constructor(
    public oGenerateService: GenerateService,
    public oMetadataService: MetadataService,
    public oUsuarioService: UsuarioService,
    public oIncidenciaService: IncidenciaService
  ) {

  }

  ngOnInit(): void {
    this.getCountUsuarios();
    this.getCountIncidencias();
  }

  generateUsuarios(n: number): void {
    this.bLoading=true;
    this.oGenerateService.generateUsuarios(n).subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " usuarios";
        this.bLoading=false;
        this.getCountUsuarios();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.bLoading=false;
      })
  }

  generateIncidencias(n: number): void {
    this.bLoading=true;
    this.oGenerateService.generateIncidencias(n).subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " incidencias";
        this.bLoading=false;
        this.getCountIncidencias();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.bLoading=false;
      })
  }

  eventsModalSubject: Subject<string> = new Subject<string>();

  getCountUsuarios(): void{
    this.oUsuarioService.getCountUsuarios().subscribe((n: number) => this.nUsuarios = n);
  }
  getCountIncidencias(): void{
    this.oIncidenciaService.getCountIncidencias().subscribe((n: number) => this.nIncidencias = n);
  }

}
