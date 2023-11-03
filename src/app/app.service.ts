import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService{

  constructor() { }

  public esContainerMobile = false;
  public theme = 'dark';

  public checkMobile() :boolean{
    let isMobileDevice = window.matchMedia("only screen and (max-width: 760px)").matches;

    if(isMobileDevice){
      this.esContainerMobile = true;
    } else{
      this.esContainerMobile = false;
    }
    console.log('this.esContainerMobile', this.esContainerMobile)

    return this.esContainerMobile;
  }

  switchTheme(){
    if (this.theme == 'light'){ this.theme = 'dark'}
    else {this.theme = 'light'}
    console.log('switchTheme', this.theme)
  }
}
