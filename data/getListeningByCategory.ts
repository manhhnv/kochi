import { listeningData } from './listeningData';

export const getListeningByCategory = (category: string, callback?: any) => {
    for (let i: number = 0; i < listeningData.length; i++) {
        if (listeningData[i].category == category) {
            if (callback) {
                callback(false)
            }
            return listeningData[i].lessons
        }
    }
    if (callback) {
        callback(false)
    }
    return null;
}