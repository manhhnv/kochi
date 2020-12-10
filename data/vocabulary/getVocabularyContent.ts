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

// Question 
export const getVocabularyListByCategory:any = (categoryId:number) => {
    let data = [];
    let count = 1;
    for(let i:number = 0; i < vocabularyData[categoryId -1].lession.length ; i++) {
        for(let j :number = 0; j < vocabularyData[categoryId -1].lession[i].list.length; j++){
            data.push(Object.assign({},vocabularyData[categoryId -1 ].lession[i].list[j],{questionId:count}));
            count++;
            
        }
    }
    return data;
} 
console.log(getVocabularyListByCategory(1));

