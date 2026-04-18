import {Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User.entity";

@Entity({ name: "feedback" })

  export class Feedback {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type :"varchar"})
    email: string;
    
    @Column({ type: "text"
    //  , name: "avis"
    })
    avis : string

    @ManyToOne(()=> User, (user) => (user.feedbacks))
    user: User

    @Column({nullable:true, type : "text"})
    sentiment:string
    // @Column({type: 'date', name:"dateCreation"})
    // dateCreation:Date ;

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updatedAt: Date;
  }
  