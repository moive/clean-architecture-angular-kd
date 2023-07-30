import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserLoginUseCase } from '../domain/useCases/user-login.usercase';
import { UserRepository } from '../domain/repositories/user.repository';
import { UserRegisterUseCase } from '../domain/useCases/user-register.usercase';
import { GetUserProfileUseCase } from '../domain/useCases/get-user-profile.usercase';
import { UserImpletationRepository } from './repositories/user/user-implementation.repository';

const userLoginUseCaseFactory = (userRepo: UserRepository) =>
  new UserLoginUseCase(userRepo);

export const userLoginUseCaseProvider = {
  provide: UserLoginUseCase,
  useFactory: userLoginUseCaseFactory, //useFactory = metodo, useClass = class , useValue = propiedad en duro
  deps: [UserRepository], // aqui se coloca los parametros de la funcion userLoginUseCaseFactory
};

const userRegisterUseCaseFactory = (userRepo: UserRepository) =>
  new UserRegisterUseCase(userRepo);

export const userRegisterUseCaseProvider = {
  provide: UserRegisterUseCase,
  useFactory: userRegisterUseCaseFactory,
  deps: [UserRepository],
};

const getUserProfileUseCaseFactory = (userRepo: UserRepository) =>
  new GetUserProfileUseCase(userRepo);

export const getUserProfileUseCaseProvider = {
  provide: GetUserProfileUseCase,
  useFactory: getUserProfileUseCaseFactory,
  deps: [UserRepository],
};

@NgModule({
  providers: [
    userLoginUseCaseProvider,
    userRegisterUseCaseProvider,
    getUserProfileUseCaseProvider,
    { provide: UserRepository, useClass: UserImpletationRepository }, // Cuando veas UserRepository reemplaza con UserImpletationRepository
  ],
  imports: [CommonModule, HttpClientModule],
})
export class DataModule {}
