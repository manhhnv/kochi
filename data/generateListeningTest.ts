import { listeningData } from './listeningData';

export const generateListeningTest = () => {
    const data = [];
    for (let i: number = 0; i < 3; i++) {
        const index = Math.floor(Math.random() * 3);
        console.log(index)
        data.push(listeningData[i].lessons[index])
    }
    return data;
}