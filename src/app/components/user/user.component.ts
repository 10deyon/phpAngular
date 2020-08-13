import { Component, OnInit } from '@angular/core';
import { DataService } from  '../../services/data.service';
import { IPost } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public name:string;
  public age:number;
  public email:string;
  public address:Address;
  public hobbies:string[];
  public posts:IPost[];
  public isEdit:boolean = false;
  public errorMsg;

  constructor(private _dataService:DataService) { 
    console.log('Constructor works...');
  }

  ngOnInit(): void {
    this.name = 'Avoseh Emmanuel';
    this.age = 27;
    this.email = 'sample.sample.com';
    this.address = {
      street: '7, Kasali street',
      city: 'Badagry',
      state: 'Lagos'
    }
    this.hobbies = ['Programming', 'Football', 'Video Games'];

    this._dataService.getPosts()
        .subscribe(data => this.posts = data,
        error => this.errorMsg = error);
  }

  onClick(){
    this.name = 'EromiDayo Tiwatope';
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby){
    //use the unshift function to push the new value
    //to the beginning of the array unlike push function
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i = 0; i<this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

//Interface
interface Address{
  street: string;
  city: string;
  state: string;
}