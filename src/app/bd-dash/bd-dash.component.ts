import { Component, OnInit, DoCheck } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-bd-dash',
  templateUrl: './bd-dash.component.html',
  styleUrls: ['./bd-dash.component.css'],
  providers: [AngularFireAuth]
})
export class BdDashComponent implements OnInit {
  user:any;
  users:any;
  data:Observable<any>;
  constructor(public afAuth: AngularFireAuth,private router: Router) {
    this.initialise();
   }

  ngOnInit() {
   console.log("init variable initialized");
  }

  initialise(){
    console.log("subscriber variable initialized");
    this.data=new Observable(observer => {
     let timer= setInterval(()=>{       
        observer.next( JSON.parse(localStorage.getItem('currentUser')));
        if((JSON.parse(localStorage.getItem('currentUser'))!='') && (JSON.parse(localStorage.getItem('currentUser'))!=null))
        {
          observer.next( JSON.parse(localStorage.getItem('currentUser')));
          observer.complete();
          clearInterval(timer);
        }
    }, 500);   
  });
  this.data.subscribe(result=>{this.user=result;console.log("from inside subsriber",this.user)});  
  }
  logout() {  
    this.afAuth.auth.signOut();
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }
}
