import { UserLogin } from '@/app/users/domain/UserLogin'
import { UserRepository } from '../domain/ports/user.repository'
import { ResponseLogin } from '../domain/responseLogin'

export class HttpClient {
  private readonly baseUrl: string = 'http://localhost:3000'

  private get headers() {
    let headers = {
      'Content-Type': 'application/json'
    }
    if (localStorage.getItem('token') !== null) {
      headers = {
        ...headers,
        'Authorization': `Bearer ${ localStorage.getItem('token') }`
      }
    }
    return headers
  }

  private constructUrl(resource: string): string {
    const separator = resource.startsWith('/') ? '' : '/'
    return this.baseUrl + separator + resource
  }

  create<B, T>(endpoint: string, body: B): Promise<T> {
    return fetch(this.constructUrl(endpoint), {
      method: 'POST',
      body: JSON.stringify(body),
      headers: this.headers
    }).then(response => response.json() as any)
  }

  read<T>(endpoint: string): Promise<T> {
    return fetch(this.constructUrl(endpoint), { headers: this.headers })
      .then(response => response.json())
      .then(response => response.data)
  }
}

export class HttpUserRepository implements UserRepository {
  constructor(private httpClient: HttpClient) {

  }

  login(userLogin: UserLogin): Promise<ResponseLogin> {
    return this.httpClient.create<UserLogin, ResponseLogin>('/api/login', userLogin)
  }
}
