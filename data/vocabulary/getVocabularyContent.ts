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
export const getAllQuestion:any = (categoryId: number) => {
    let data = [];
    let count = 1;
    let allVocabulary = getVocabularyListByCategory(categoryId);
    for(let i = 0; i < 30 ; i++) {
        const randomQuestion = allVocabulary[Math.floor(Math.random() * allVocabulary.length)];
        data.push(Object.assign({} ,randomQuestion, {questionId: count  } ));
        count++;
    }
    return data;
};
export const getAllAnswer:any = (categoryId:number,questionId: number) => {
    let data = [];
    // let allQuestion = getAllQuestion(categoryId);
    let allData = getVocabularyListByCategory(categoryId);
    let question = null; ;
    let count = 1;
    let answer = "";

    if(questionId > 0) {
        question = getAllQuestion(categoryId)[questionId - 1];
    }
    if(question) {
        answer = question.meaning;
        data.push(Object.assign({},{text:answer,id:1,correct:true,question_text:question.kanji}));
        
    }
    for(let i = 2 ; i < 5 ; i++){
        const randomAnswer = allData[Math.floor(Math.random()*allData.length )].meaning;
        if(randomAnswer !== answer   ){
            data.push(Object.assign({},{text:randomAnswer,id:i,corrent:false}));
        }
    }
    return data;
}

// console.log("---------------------",getAllAnswer(1,1));

// console.log(getAllQuestion(1));
// console.log(getVocabularyListByCategory(1));

