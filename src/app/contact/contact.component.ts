import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  header: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  postId:any;
  showError = 0;
  emailSent: boolean | undefined;
  message: string | undefined;
  header: string | undefined;
  errMessage: string | undefined;
  disableButton = false;


  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required])
  });


  constructor(private http: HttpClient, public dialog: MatDialog) {

  }

  ngOnInit() {
    
  }
  
  onSubmit(){
    this.disableButton = true;

    if (this.formGroup.valid) {
      this.http.post<any>(
        'https://1wuw0eqf95.execute-api.ap-northeast-1.amazonaws.com/jeymsie-sendEmail',
        JSON.stringify(this.formGroup.value)
        ).subscribe(
          data => {
            this.postId = data.id;
          },
          error => {
            if(error.status == 500){
              this.emailSent = true;
              this.dialogue();
            }
            else {
              this.errMessage = error.message;
              this.emailSent = false;
              this.dialogue();
            }
          }
        );
    } else {
      this.showError = 1;
      this.disableButton = false;
    }
  }

  dialogue(){
    if (this.emailSent) {
      this.header = "Hello, new friend!";
      this.message = "Your contact information has been sent to me.\nI'll contact you as soon as possible!";
    }else{
      this.header = "Uh-oh...";
      this.message = "Seems like we got this error: " + this.errMessage;
    }

    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      data: {
        header: this.header,
        message: this.message
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}

@Component({
  selector: 'dialogue',
  templateUrl: 'dialogue.html',
  styleUrls: ['dialogue.css']
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onClick(): void {
    this.dialogRef.close();
  }

}
