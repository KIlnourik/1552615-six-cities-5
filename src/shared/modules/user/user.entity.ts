import { User } from '../../types/index.js';

export class UserEntity implements User {
  public name: string;
  public email: string;
  public avatarPath: string;
  public isProType: boolean;
}
