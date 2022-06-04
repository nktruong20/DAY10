import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  List:any = [];

  constructor() { }

  ngOnInit(): void {
    this.getIn4();
  }

  getIn4(){
    let data :any = localStorage.getItem('List');
    if(data !=null || data !=''){
      this.List = JSON.parse(data);
    }else{
      this.List = [];
    }
  }
  delete(i:number){
    this.List.splice(i, 1);
    localStorage.setItem('List',JSON.stringify(this.List));
    this.getIn4();
  }
  edit(i:number){
    let box = document.getElementById(`box${i}`) as HTMLDivElement | null;
    let saveNKT = document.getElementById(`saveNKT${i}`) as HTMLDivElement | null;
    let iName = document.getElementById(`name${i}`) as HTMLDivElement | null;
    let iAddress = document.getElementById(`address${i}`) as HTMLDivElement | null;
    let isdt = document.getElementById(`sdt${i}`) as HTMLDivElement | null;
    saveNKT?.classList.remove('d-none');
    box?.classList.add('d-none');
    iName?.classList.add('borderInput');
    iAddress?.classList.add('borderInput');
    isdt?.classList.add('borderInput');
  }
  saveEdit(i:number){
    let box = document.getElementById(`box${i}`) as HTMLDivElement | null;
    let saveNKT = document.getElementById(`saveNKT${i}`) as HTMLDivElement | null;
    let iName = document.getElementById(`name${i}`) as HTMLDivElement | null;
    let iAdress = document.getElementById(`address${i}`) as HTMLDivElement | null;
    let iSDT = document.getElementById(`sdt${i}`) as HTMLDivElement | null;
    saveNKT?.classList.add('d-none');
    box?.classList.remove('d-none');
    iName?.classList.remove('borderInput');
    iAdress?.classList.remove('borderInput');
    iSDT?.classList.remove('borderInput');
    localStorage.setItem('List', JSON.stringify(this.List));
    this.getIn4();

  }

}
