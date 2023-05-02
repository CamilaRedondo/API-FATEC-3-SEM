import Profile from "../../model/Profile";
import User from "../../model/User";
import IUserRepository from "../IUserRepository";

export default class UserRepository implements IUserRepository {
    // edit user
    async editUser(id: number, userName: string, fullName: string,cpf:string,email:string): Promise<User | null> {
        const updatedInfo = { userName,fullName,cpf,email };
        await User.update(updatedInfo, { where: { id:id } });
        const updatedUser = await User.findByPk(id);
        return updatedUser;
      }

    // create user
    saveUser(user: User): Promise<User> {
        return User.create({
            userName: user.userName,
            fullName: user.fullName,
            cpf: user.cpf,
            email: user.email,
            password: user.password,
            active: user.active,
            profile: {
                name: 'Usuário',
                type: 0
            }
        }, { include: {
            model: Profile
        } });
    }

    // create admin
    saveAdmin(user: User): Promise<User> {
        return User.create({
            userName: user.userName,
            fullName: user.fullName,
            cpf: user.cpf,
            email: user.email,
            password: user.password,
            active: user.active,
            profile: {
                name: 'Administrador',
                type: 1
            }
        }, { include: {
            model: Profile
        } });
    }

    // find by Id
    findById(id: number): Promise<User | null> {
        return User.findOne({ where: { id: id } });
    }

    // find by Email
    findByEmail(email: string): Promise<User | null> {
        return User.findOne({ where: { email: email }, include: { model: Profile } });
    }

     // find by Cpf and Cnpj
     findByCpf(cpf: string): Promise<User | null> {
        return User.findOne({ where: { cpf: cpf } });
    }

     // find by userName
     findByUserName(userName: string): Promise<User | null> {
        return User.findOne({ where: { userName: userName } });
    }

    // find by fullName
    findByFullName(fullName: string): Promise<User | null> {
        return User.findOne({ where: { fullName: fullName } });
    }

    // find all
    findAll(): Promise<User[]> {
        return User.findAll({ include: { model: Profile } });
    }

    // delete
    async removeByEmail(email: string): Promise<User | null> {
        const deletedCount = await User.destroy({ where: { email: email } });
        if (deletedCount > 0) {
            return null;
        } else {
            throw new Error(`User with email ${email} not found.`);
        }
    }

    // password update
    async updatePasswordByEmail(email: string, newPassword: string): Promise<number> {
        const result = await User.update({ password: newPassword }, { where: { email } });
        return result[0];
      }
      
    
}