import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Exclude } from "class-transformer";
import { Associate } from "./associate.entity";

@Entity("register")
class Register {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  nome: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  email: string;

  @Column()
  telefone: number;

  @Column()
  ativo: boolean;

  @Column()
  data_registro: string;

  @OneToMany(() => Associate, (associate) => associate.register, {
    onDelete: "CASCADE",
    eager: true,
  })
  associate: Associate[];
}

export { Register };