import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DataSource } from 'typeorm'
import Persona from './Persona'

type Props = {}

export const dataSource = new DataSource({
    database: 'personasdb.db',
    entities: [Persona],
    location: 'default',
    logging: [],
    synchronize: true,
    type: 'react-native',

});


export const PersonaRepository = dataSource.getRepository(Persona);