import { defineStore } from "pinia";

export const useCunterStore =  defineStore('getShouldDeleteItems',{
    state : ()=>{
        return{
            choices : [],
            shouldDeleteItems : [],
            oneQuestionnaire : []
        }
    },
    actions:{
        getchoices(payload){
            this.choices.push(payload)
        },
        clearChoices(){
            this.choices = []
        },
        getvalue(payload){
            this.shouldDeleteItems.push(payload)
            console.log( this.shouldDeleteItems);
        },
        cleaneSate(){
            this.shouldDeleteItems = []; 
        },
        getOneQuestionnaire(payload){
            this.oneQuestionnaire = payload
        }
    }
})