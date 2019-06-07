 
 export class Helper {
    public userArray: string[] = [];
    getData(){
    if(localStorage.getItem('userArray')== null){
      this.userArray= [];
    }else{
      this.userArray= JSON.parse(localStorage.getItem('userArray'));
    }
  }

}