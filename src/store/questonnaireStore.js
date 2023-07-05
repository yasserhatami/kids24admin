import { defineStore } from "pinia";

export const useCunterStore =  defineStore('getShouldDeleteItems',{
    state : ()=>{
        return{
            shouldDeleteItems : [],
            oneQuestionnaire : []
        }
    },
    actions:{
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