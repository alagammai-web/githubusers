import {
  Component,
  OnInit
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';
import {
  GithubusersService
} from '../githubusers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  result: any;
  repodetails: any;
  userData: any;
  search: any;



  constructor(private githubusers: GithubusersService) {}

  ngOnInit(): void {
    this.githubusers.sendusers().subscribe((data) => {
        this.result = data;
        console.log(this.result);
      },
      (err) => {
        console.log("error coming");
      });
  }


  onClick(user: any) {
    this.githubusers.senduserrepo(user.login).subscribe((repo) => {
        this.repodetails = repo;
        console.log(this.repodetails);
      },
      (err) => {
        console.log("error showing in repo");
      })
  }
  //   output : any;
  //   submitform(userform: NgForm){
  // this.githubusers.sendusername(userform.value.userName).subscribe((user)=>{
  //   this.output = user;
  //   console.log(this.output);
  // })
  //   }




}
