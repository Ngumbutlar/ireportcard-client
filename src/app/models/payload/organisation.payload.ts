import { OrganisationEntity } from "../entity/school/organisation.entity";
import { UserEntity } from "../entity/user/user.entity";

export interface OrganisationPayload {
    creator: UserEntity;
    organisation: OrganisationEntity;
    password: string;
}
