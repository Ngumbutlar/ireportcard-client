import {UserAccountEntity} from "./user-account.entity";
import {UserEntity} from "./user.entity";
import {Gender} from "../base/gender.enum";
import {Role} from "../base/role.enum";

export class UserPayload {
  constructor(
    public user: UserEntity,
    public account?: UserAccountEntity
  ) {
  }

  static form(form: UserPayloadForm, role: Role = Role.USER) {
    const user: UserEntity = {
      username: form.username,
      email: form.email,
      accountId: undefined,
      approved: false,
      phone: form.phone,
      address: form.address
    }

    const account: UserAccountEntity = {
      accountId: '',
        firstname: form.firstname,
        lastname: form.lastname,
        gender: form.gender,
        role: role,
        schoolId: form.schoolId,
        organisationId: form.organisationId
    };

    return new UserPayload(user, account);
  }
}

interface UserPayloadForm {
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  approved?: boolean;
  phone?: string;
  address?: string;
  gender: Gender;
  schoolId?: number;
  organisationId?: number;
}
