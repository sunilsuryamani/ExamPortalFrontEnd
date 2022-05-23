import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
 // userService: any;

  constructor(private userService:UserService,private snack:MatSnackBar) { }
  public user ={
    username: '',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    phone:'',

  }


  ngOnInit(): void {

  }
  onClickSubmit() {
    console.log(this.user)
    if(this.user.username=='' || this.user.username==null)
    {
      //alert('User is required !!');
      this.snack.open("User name is required !!" ,"",{
        duration:3000,
        verticalPosition:'top'
      })
      return;
    }
    //adduser.userservice
    this.userService.addUser(this.user).subscribe(
      (data: any)=>{
        //success
        console.log(data);
        //alert('success')
        Swal.fire('Successfully done','User id is'+data.id+' Registered')
      },
      (error: any)=>{
        //error
        console.log(error);
        //alert('error')
        this.snack.open("Something is wrong !!","",{
          duration:3000,
          verticalPosition:'top'
        })


      }
      )
 }
//

}
