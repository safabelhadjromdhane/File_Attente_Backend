import {Column, CreateDateColumn,OneToOne, Entity, ManyToOne, JoinColumn,PrimaryColumn} from "typeorm";
import {User} from "./User.entity";
import { Guichet } from "./Guichet.entity";
import { Length } from "class-validator";
  
  @Entity({ name: "produit" })
  export class Product {

    @PrimaryColumn({type : "text"})
    // @Length(1, 99999)
    codeProd: string;
  
    @Column({type : "varchar"})
    libProd: string;

    @Column( {type: "int"})
    quantite:number

    @ManyToOne(()=> User, (user) => (user.products))
    user: User
    @Column({type:"varchar",nullable:true})
    @OneToOne(()=>Guichet, (guichet)=> guichet.produit)
    // @JoinColumn()
    guichet: Guichet;

    @CreateDateColumn()
    createdAt: Date;
   
  }
  

 // typeorm migration:create ./migration/users