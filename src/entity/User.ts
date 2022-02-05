import { Entity, PrimaryColumn, Column, Long } from "typeorm";
import * as bcrypt from "bcryptjs";
import { type } from "os";

@Entity()
export class User {

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({type: 'bigint'})
    cellphone: number;

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }


}
