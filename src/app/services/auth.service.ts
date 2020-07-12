import { User as firebaseUser  } from 'firebase';
import { User } from '../model/classes/user';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: firebaseUser = null;
  firebase

  constructor(private afAuth: AngularFireAuth,
              private userService: UserService) {
    this.afAuth.authState.subscribe((user) => this.currentUser = user);
  }

  get isLoged(): boolean {
    return this.currentUser !== null;
  }

  get CurrentUser(): any {
    return this.isLoged ? this.currentUser : null;
  }

  get CurrentUserObservable(): any {
    return this.afAuth.authState;
  }

  get CurrentUserId(): string {
    return this.isLoged ? this.currentUser.uid : '';
  }


  async onLogin(email: string, password: string) {
      return await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  onLogOut() {
    this.afAuth.signOut();
  }

  async onRegister(email: string, password: string): Promise<any> {
    
    let aux;
    try 
    {
      aux = await this.afAuth.createUserWithEmailAndPassword(email, password);
      if (aux !== null)
      {
        let newUser: User = new User();
        this.userService.create(this.CurrentUserId, newUser);
        this.onLogOut();
      }

    } catch {

    } finally {
      return aux;
    }
  }
}
