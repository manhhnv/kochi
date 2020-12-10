import { vocabularyData } from './vocabularyData';
export const getVocabularyCategory = () => {
    let data = [];
    for(let i:number = 0; i < vocabularyData.length;i++){
        data.push(Object.assign({},vocabularyData[i].category,vocabularyData[i].id,
            vocabularyData[i].desc,vocabularyData[i].icon));
    }
    return data;
}
export const getVocabularyLesson = (id:number) => {
    if( id){
        return vocabularyData[id - 1].lession;
    }
    
}
export const getVocabularyList = (categoryId:number, id:number) => {
    if(id && categoryId) 
    {
        return vocabularyData[categoryId -  1].lession[id - 1].list; }
}