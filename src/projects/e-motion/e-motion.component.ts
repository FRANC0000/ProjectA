import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-e-motion',
  templateUrl: './e-motion.component.html',
  styleUrls: ['./e-motion.component.scss']
})
export class EMotionComponent implements OnInit {

  constructor(public appService: AppService,
    public fb: FormBuilder) { }

  formCrearEmocion !: FormGroup;

  ngOnInit(): void {
    console.log('ngOnInit E-MOTION')

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

  guardarformEMotion(){
    console.log('guardarformEMotion');
    console.log('formCrearEmocion', this.formCrearEmocion.value);
  }
}
