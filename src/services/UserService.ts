import { IUser } from '../interfaces/IUser';
import { Api } from '../providers';

const getUser = () => Api.get<IUser>(`/${process.env.GITHUB_USERNAME}`);

export const UserService = {
    getUser
};
