import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns'

export interface PlantProps {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
        times: number;
        repeat_every: string;
    },
    dateTimeNotification: Date;
}

interface StoragePlantProps {
    [id: string]: {
        data: PlantProps;
    }
}

export async function savePlant(plant: PlantProps) : Promise<void> {
    try {
        const data = await AsyncStorage.getItem('@plantmanager:plants');
        // por padraõ ele salva tudo como texto
        const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {};
        // aqui ele esta pegando o texto e convertendo para um arquivo tipo json do tipo PlantProps

        const newPlants = {
            [plant.id]: {
                data: plant
            }
        };

        await AsyncStorage.setItem('@plantmanager:plants', 
        JSON.stringify({
            ...newPlants, //pegando o que ja existia e adcionando na coleção
            ...oldPlants // e mantando o antigo, para que não seja substituido sempre 
        }));

    }catch(error){  
        throw new Error(error);
    }
}

export async function loadPlant() : Promise<PlantProps[]> {
    try {
        const data = await AsyncStorage.getItem('@plantmanager:plants');
        // por padraõ ele salva tudo como texto
        const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};
        // aqui ele esta pegando o texto e convertendo para um arquivo tipo json do tipo PlantProps
        const plantsSorted = Object
        .keys(plants)
        .map((plant) => {
            return {
                ...plants[plant].data,
                hour: format(new Date(plants[plant].data.dateTimeNotification), 'HH:mm')
            }
        })
        .sort((a, b) =>
            Math.floor(
                new Date(a.dateTimeNotification).getTime() / 1000 -
                Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
            )
        )

        return plantsSorted;

    }catch(error){  
        throw new Error(error);
    }
}