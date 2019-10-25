import { ResponseLogin } from '@/app/users/domain/responseLogin'
import { UserLogin } from '@/app/users/domain/UserLogin'

export interface UserRepository {
  login(userLogin:UserLogin): Promise<ResponseLogin>;
}