import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formIn4 = new FormGroup({
    name:new FormControl(''),
    address :new FormControl(''),
    sdt : new FormControl('')
  });
  List:any = [];
  constructor() { }

  ngOnInit(): void {
    this.getIn4();
  }
  getIn4(){
    let data:any = localStorage.getItem('List');
    if(data == null || data == ''){
      this.List = [];
    }else{
      this.List = JSON.parse(data);
    }
  }
  submitF(){
      this.List.push(this.formIn4.value);
      localStorage.setItem('List',JSON.stringify(this.List))
  }

}
