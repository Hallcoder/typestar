import next from "next";

export default class Stack{
    nextIndex:number;
    elements:string[] = [];
    constructor(){
        this.nextIndex = 0;
    }
    push(c){
       this.elements.push(c);
       console.log(this.elements)
    }
    pop():string{
        if(this.isEmpty()) return 'undefined';
        this.nextIndex--;
       return this.elements.pop()!;
    }
    peek(){
        return this.elements[this.nextIndex-1];
    }
    isEmpty():boolean{
        return (this.nextIndex == 0);
    }
    
}