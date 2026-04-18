import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany, UpdateDateColumn, ManyToMany, JoinTable, Generated } from "typeorm";
// import { User } from "./User.entity";
// import { File } from "./File.entity";
import { Guichet } from "./Guichet.entity";
import { File } from "./File.entity";
import { User } from "./User.entity";



@Entity({ name: "ticket" })
export class Ticket {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text', nullable: true })
    description: string;

    // @Column({nullable:true})
    // description:string;

    @Column({ type: 'enum', enum: ['en attente', 'en cours', 'traiter'], default: 'en attente' })
    status: 'en attente' | 'en cours' | 'traiter';

    @Column({ type: "int" })
    NbrClientAttente: number;

    @CreateDateColumn()
    dateTicket: Date;

    @Column({ type: "int" })
    codeProd: number;

    @Column({ type: "text" })
    codeClient: string;

    @Column({ type: "varchar" })
    idGuichet: string

    @ManyToOne(() => User, user => user.tickets)
    user: User;
    // Écrivez :
    @Column({ type: 'varchar', nullable: true })
    idFile: string;
    @ManyToOne(() => File, file => file.tickets
        , { onDelete: 'CASCADE' }
    ) file: File;

    @OneToMany(() => Guichet, guichet => guichet.ticket)
    guichets: Guichet[];

    @UpdateDateColumn()
    updatedAt: Date;
    // @Column({nullable:true})



}
