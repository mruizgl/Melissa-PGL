import React, { Component } from 'react'
import { BaseEntity, Entity } from 'typeorm'

@Entity('persona')
export class Persona extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    nombre: string;

    @Column('int')
    edad: number;
}

export default Persona