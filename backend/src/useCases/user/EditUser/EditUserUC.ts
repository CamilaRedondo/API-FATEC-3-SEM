import User from "../../../model/User";
import IUserRepository from "../../../repositories/IUserRepository";
import IEditUserDTO from "./IEditUserDTO";

export default class CreateUserUC {
    constructor(
       private userRepository: IUserRepository 
    ) {}

    async execute(props: IEditUserDTO) {

        const id = props.id;

        const user = await User.findByPk(id)

        if (!user) throw new Error("user not found")
        

        const userName = props.userName ?? user.userName!;
        const fullName = props.fullName ?? user.fullName!;
        const cpf = props.cpf ?? user.cpf!;
        const email = props.email ?? user.email!;

        const editUser = await this.userRepository.editUser(id, userName,fullName,cpf,email);

        if (!editUser) throw new Error('something went wrong')
        
        return editUser;

    
    }
}