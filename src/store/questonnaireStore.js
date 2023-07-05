import { defineStore } from "pinia";

export const useCunterStore =  defineStore('getShouldDeleteItems',{
    state : ()=>{
        return{
            shouldDeleteItems : []
        }
    },
    actions:{
        getvalue(payload){
            this.shouldDeleteItems.push(payload)
            console.log( this.shouldDeleteItems);
        },
        cleaneSate(){
            this.shouldDeleteItems = []; 
        }
    }
})