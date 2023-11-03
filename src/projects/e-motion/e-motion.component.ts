import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { carruselEmotions } from './carrusel';

@Component({
  selector: 'app-e-motion',
  templateUrl: './e-motion.component.html',
  styleUrls: ['./e-motion.component.scss']
})
export class EMotionComponent implements OnInit, OnDestroy {

  constructor(public appService: AppService,
    public fb: FormBuilder) { }

  formCrearEmocion !: FormGroup;

  carruselEmotions = carruselEmotions;

  carruselSelected = 0;
  carruselInterval: Subscription = new Subscription;

  ngOnInit(): void {
    console.log('ngOnInit E-MOTION')

    console.log('carruselEmotions', this.carruselEmotions)
    console.log('carruselSelected', this.carruselSelected)

    // this.carruselInterval = interval(3000).subscribe(x => this.siguienteItemCarrusel());


    /**
     this.formMensajeConfigTareaExterna = this.fb.group({
      mensaje : [null, [Validators.required, customRequired]]
    })

    ¿Qué pienso? ¿Qué siento? ¿Qué hice por mi?

     */

    this.formCrearEmocion = this.fb.group({
      pensar : [null, [Validators.required]],
      sentir : [null, [Validators.required]],
      hacer : [null, [Validators.required]]
    })
  }

  ngOnDestroy(): void {
      this.carruselInterval.unsubscribe();
      console.log('carruselInterval destruido')
  }

  guardarformEMotion(){
    console.log('guardarformEMotion');
    console.log('formCrearEmocion', this.formCrearEmocion.value);
  }

  siguienteItemCarrusel(){
    let largo = this.carruselEmotions.length;
    let pos = this.carruselSelected + 1;

    // console.log('pos', pos);
    // console.log('largo', largo);

    if (pos < largo){
      this.carruselSelected ++;
    }
    else if (pos == largo){
      this.carruselSelected = 0;
    }
  }
}
