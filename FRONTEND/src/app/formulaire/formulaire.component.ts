import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Adress } from '../models/adress.model';
import { User } from'../models/user.model';
import { ClientService } from '../services/client.service';
import { UserService } from'../services/user.service';
import { userAdressesState } from '../shared/states/user-adresses-state';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  userInfos: FormGroup;

  

  constructor(private clientService :ClientService, private formBuilder: FormBuilder, private userService: UserService, private store: Store) {
 
    this.userInfos = this.formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      login: ['', Validators.required], 
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
    });
    
  }
  get password(){
    return this.userInfos.get('password');
  }
  get lastName(){
    return this.userInfos.get('lastName');
  }
  get firstName(){
    return this.userInfos.get('firstName');
  }
  get email(){
    return this.userInfos.get('email');
  }
  get phone(){
    return this.userInfos.get('phone');
  }
  get address(){
    return this.userInfos.get('address');
  }
  get gender(){
    return this.userInfos.get('gender');
  }
  get login(){
    return this.userInfos.get('login');
  }
  user: User | undefined ;

    // create object Client
    createClient() {
      this.user = new User(this.userInfos.value.lastName!, this.userInfos.value.firstName!, this.userInfos.value.email!, this.userInfos.value.phone!, this.userInfos.value.address!,this.userInfos.value.gender!, this.userInfos.value.login!, this.userInfos.value.password!);
        console.log(this.user);
      this.clientService.postNewClient(this.user).subscribe();
    }

  submit(){
    const userInfosArray = this.userInfos.value;
    const newUser = new User(
      userInfosArray['lastName'],
      userInfosArray['firstName'],
      userInfosArray['email'],
      userInfosArray['phone'],
      userInfosArray['address'],
      userInfosArray['gender'],
      userInfosArray['password'],
      userInfosArray['login'],
    )
    this.userService.addUser(newUser);
  }

  ngOnInit(): void {}

}
