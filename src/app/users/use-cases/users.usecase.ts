import { UserLogin } from '@/app/users/domain/UserLogin'
import { HttpUserRepository } from '../adapters/http.user.repository'
import { ResponseLogin } from '../domain/responseLogin'

export class UsersUsecase {

  constructor(private httpUserRepository:HttpUserRepository) {

  }

  login(userLogin:UserLogin): Promise<ResponseLogin>{
    return this.httpUserRepository.login(userLogin).then((data:ResponseLogin) => {
      if(data.success === true){
        localStorage.setItem('token', data.token)
      }
      else {
        throw new Error('Identifiant ou mot de passe inconnu')
      }
      return data;
    })
  }
}