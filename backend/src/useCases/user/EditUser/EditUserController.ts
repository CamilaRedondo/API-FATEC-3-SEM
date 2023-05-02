import { Request, Response } from "express";
import EditUserUC from "./EditUserUC";


export class EditUserController {
    constructor(
        private EditUserUC: EditUserUC
    ) { }

    async editUser(req: Request, res: Response): Promise<Response> {

        const { id, userName, fullName,cpf, email } = req.body;

        try {
            await this.EditUserUC.execute({ id,userName,fullName,cpf,email });
            return res.status(200).json({
                Ok: true,
                Message: "Edited",
            });
        } catch (err: any) {
            return res.status(400).json({
                Ok: false,
                Message: err,
            });
        }
    }
}