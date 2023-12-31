import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  saluda = 'Hola mundo!'
  visibleBurguerButton = false;
  esContainerMobile = false;

  constructor(private router: Router, public appService : AppService){}


  ngOnInit(): void {
    console.log('ngOnInit')
    this.esContainerMobile =  this.appService.checkMobile();
    this.visibleBurguerButton = false;
    this.saluda += ' Hola planeta';

    setTimeout(() => {
      this.saluda += ' Hola VIÑA!'
    }, 1500);


    /*Fibonacci Recursivo: Escribe una función en el lenguaje de programación que prefieras para calcular el n-ésimo número de la secuencia de Fibonacci de forma recursiva. La secuencia de Fibonacci comienza con 0 y 1, y cada número subsiguiente es la suma de los dos números anteriores. Por ejemplo, los primeros números de la secuencia son 0, 1, 1, 2, 3, 5, 8, 13, 21, ... */

    console.log(this.fibonacci(8));
    console.log(this.orderList([64, 25, 12, 22, 11]));
    console.log(this.es_palindromo('A man a plan a canal Panama'));
    

    




  }
  title = 'my-blog';

  fibonacci(numero :number): number{
    if (numero <= 0) {
      return 0;
    }
    else if (numero == 1){
      return 1;
    }
    else{
      return (this.fibonacci(numero-1) + this.fibonacci(numero-2));
    }
  }

  orderList(arr : number[]) : number[]{
    let n = arr.length;
    for (let i = 0; i < n ; i++){
      let minIdx = i;
      for (let j = i + 1; j < n; j++){
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
      }
    }
      const temp: number = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    } 

    return arr;
  }

  es_palindromo(cadena:string) :boolean{
    cadena = cadena.replace(/ /g, '').toLowerCase();
    const cadenaReverso: string = cadena.split('').reverse().join('');
    return cadena === cadenaReverso;
  }

  clickHeaderItem(itemName :string){
    console.log('itemName', itemName)
    switch (itemName){
      case 'e-motion': 
        this.router.navigate(['/e-motion']);
        break;
      case 'calendario':
        this.router.navigate(['/']); 
        break;
      case 'juegos': 
        this.router.navigate(['/']);
        break;
      case 'home': 
        this.router.navigate(['/']);
        break;
    }
  }

  burguerButton(){
    if (!this.visibleBurguerButton){
      this.visibleBurguerButton = true;
    }
    else{
      this.visibleBurguerButton = false;
    }
    console.log('visibleBurguerButton', this.visibleBurguerButton);
  }
}
