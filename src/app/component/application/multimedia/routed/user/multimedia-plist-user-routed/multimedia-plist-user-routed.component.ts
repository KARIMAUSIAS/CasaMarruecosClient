import { MultimediaService } from 'src/app/service/multimedia.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-multimedia-plist-user-routed',
  templateUrl: './multimedia-plist-user-routed.component.html',
  styleUrls: ['./multimedia-plist-user-routed.component.css']
})
export class MultimediaPlistUserRoutedComponent implements OnInit {

    id_evento: number;
    fotos: string[];

  constructor(
    private oMultimediaService: MultimediaService,
    private oActivatedRoute: ActivatedRoute,
  ) {
    const id_tipousuario =  this.oActivatedRoute.snapshot.params['id_evento'];
        if(id_tipousuario == null){
            this.id_evento = 0;
        }else{
            this.id_evento = id_tipousuario;
        }
  }

  ngOnInit(): void {
    this.getFotos(this.id_evento);
  }

  getFotos(id: number){

    this.oMultimediaService.getFotos(id).subscribe({
        next: (data: Array<string>) => {
            this.fotos = data;
            console.log(data);

        }
    })
  }

}
