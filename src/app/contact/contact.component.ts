import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  postId:any;


  formGroup = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    desc: new FormControl('')
  });


  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }
  
  onSubmit(){
    const endpoint = 'https://1wuw0eqf95.execute-api.ap-northeast-1.amazonaws.com/jeymsie-sendEmail';

    console.log("herehere");
    console.log(this.formGroup.value.name);
    

    var data = {
      name: this.formGroup.value.name.toString(),
      phone: this.formGroup.value.phone.toString(),
      email: this.formGroup.value.email.toString(),
      desc: this.formGroup.value.desc.toString()
      
    }

    this.http.post<any>( 'https://1wuw0eqf95.execute-api.ap-northeast-1.amazonaws.com/jeymsie-sendEmail', JSON.stringify(this.formGroup.value) ).subscribe(data => {
      this.postId = data.id;
    });
    
  }
}
