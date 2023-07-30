import { UseCase } from '../../base/use-case';
import { UserModel } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';
import { Observable } from 'rxjs';

export class UserRegisterUseCase
  implements UseCase<{ phoneNum: string; password: string }, UserModel>
{
  constructor(private userRepository: UserRepository) {}

  execute(params: {
    phoneNum: string;
    password: string;
  }): Observable<UserModel> {
    return this.userRepository.register(params);
  }
}
