import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("cp")
export default class Cp {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  uid: string;

  @Column()
  text: string;
}
