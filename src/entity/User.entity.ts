import { Entity,PrimaryColumn, OneToMany, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import {IsEmail, Length} from "class-validator";
import {Product } from "./Product.entity";
import {Guichet} from "./Guichet.entity";
import {Bureau } from "./Bureau.entity";
import {Feedback} from "./Feedback.entity";
import { File } from "./File.entity";
import { Ticket } from "./Ticket.entity";
// import { Ticket
//  } from "./ticket.entity";
export type roleType = "admin" | "client" | "operateur";


@Entity({name : "user"})
export class User {

    @PrimaryColumn({type : "text"})
    id: string

    @Column({type : "text"})
    nom: string;

    @Column({type : "text"})
    prenom: string;

    @Column({type : "text"})
    @IsEmail()
    email: string;

    @Column({type : "int"})
    @Length(8)
    telephone : number

    @Column({ nullable: false , type : "varchar"})
    password: string;
  
    @Column({type : "text"})
    role: string ;
    
    @OneToMany(() => Product, (product) => product.user)
    products: Product [];
    
    @OneToMany(() =>Guichet, (guichet) => guichet.user)
    guichets: Guichet [];
    
    @OneToMany(() =>Bureau, (bureau) => bureau.user)
    bureaux: Bureau [];

    @OneToMany(() =>Feedback, (feedback) => feedback.user)
    feedbacks: Feedback [];

    @OneToMany(()=> Ticket, (ticket) => ticket.user)
    tickets:Ticket[];

    // @OneToMany(()=> File, (file)=> file.user)
    // files:File[];
    @ManyToOne(()=>File, file=>file.users)
    file:File;

    @CreateDateColumn()
    createdAt: Date;

}
