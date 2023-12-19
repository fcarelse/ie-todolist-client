import { fetchData } from '../../helper/Fetch/FetchHelper'
import { TokenSetter } from '../../helper/Types';

export type Credentials = {
	username: string,
	password: string
}

export const AuthService = {
	setTokenSetter: (setToken: TokenSetter)=>{
		AuthService.setToken = setToken;
	},
	setToken: (token: string)=>{},
	login: async ({username, password}: Credentials)=>{
		const res = await fetchData('', {username, password}, 'post', '');
	},
};