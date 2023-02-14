import { EventoService } from './../../../../service/evento.service';
import { AccionService } from './../../../../service/accion.service';
import { IncidenciaService } from './../../../../service/incidencia.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { GenerateService } from './../../../../service/generate.service';
import { Component, OnInit } from '@angular/core';
import { MetadataService } from 'src/app/service/metadata.service';
import { Subject } from 'rxjs';
import { MultimediaService } from 'src/app/service/multimedia.service';
import { ParticipacionService } from 'src/app/service/participacion.service';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {
    nUsuarios: number = 0;
    nAcciones: number = 0;
    nIncidencias: number = 0;
    nEventos: number = 0;
    nMultimedias: number = 0;
    nParticipaciones: number = 0;
    bLoading:boolean=false;
    strResult: string = "";

  constructor(
    public oGenerateService: GenerateService,
    public oMetadataService: MetadataService,
    public oUsuarioService: UsuarioService,
    public oIncidenciaService: IncidenciaService,
    public oAccionService: AccionService,
    public oEventoService: EventoService,
    public oMultimediaService: MultimediaService,
    public oParticipacionService: ParticipacionService,
  ) {

  }

  ngOnInit(): void {
    this.getCountUsuarios();
    this.getCountIncidencias();
    this.getCountAcciones();
    this.getCountEventos();
    this.getCountMultimedias();
    this.getCountParticipaciones();
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

  generateAcciones(n: number): void {
    this.bLoading=true;
    this.oGenerateService.generateAcciones(n).subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " Acciones";
        this.bLoading=false;
        this.getCountAcciones();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.bLoading=false;
      })
  }

  generateEventos(n: number): void {
    this.bLoading=true;
    this.oGenerateService.generateEventos(n).subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " Eventos";
        this.bLoading=false;
        this.getCountEventos();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.bLoading=false;
      })
  }
  generateMultimedias(n: number): void {
    this.bLoading=true;
    this.oGenerateService.generateMultimedias(n).subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " Multimedias";
        this.bLoading=false;
        this.getCountMultimedias();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.bLoading=false;
      })
  }
  generateParticipaciones(n: number): void {
    this.bLoading=true;
    this.oGenerateService.generateParticipaciones(n).subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " Participaciones";
        this.bLoading=false;
        this.getCountParticipaciones();
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
  getCountEventos(): void{
    this.oEventoService.getCountEventos().subscribe((n: number) => this.nEventos = n);
  }
  getCountAcciones(): void{
    this.oAccionService.getCountAcciones().subscribe((n: number) => this.nAcciones = n);
  }
  getCountMultimedias(): void{
    this.oMultimediaService.getCountMultimedias().subscribe((n: number) => this.nMultimedias = n);
  }
  getCountParticipaciones(): void{
    this.oParticipacionService.getCountParticipaciones().subscribe((n: number) => this.nParticipaciones = n);
  }

}
