import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-spoc-dash',
  templateUrl: './spoc-dash.component.html',
  styleUrls: ['./spoc-dash.component.css'],
  providers: [AngularFireAuth]
})
export class SpocDashComponent implements OnInit {
  user:any;
  data:Observable<any>;
  constructor(public afAuth: AngularFireAuth,private router: Router) { }

  ngOnInit() {
    this.initialise();
  }
  initialise(){
    this.data=new Observable(observer => {
      setInterval(()=>{       
        observer.next( JSON.parse(localStorage.getItem('currentUser')));
        if(JSON.parse(localStorage.getItem('currentUser')).photoUrl)
        {
          observer.next( JSON.parse(localStorage.getItem('currentUser')));
          observer.complete();
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
