//FIFO
export default class Queue{
    front:number;
    rear:number;
    elements:string[] = [];
    constructor(){
        this.front =-1;
        this.rear = 0; 
    }
    push(l){
    if(this.isEmpty()){
        this.front++;
        this.elements[this.rear] = l;
        this.rear++;
        console.log('Queue was empty',this.front);
        return;
    }
     this.elements[this.rear++] = l ;
    }
    pop():string{
        if(this.isEmpty()) return 'undefined';
        this.front--;
    return this.elements.pop()!;
    }
    top():string{
    if(this.isEmpty()) return 'undefined';
    return this.elements[this.front];
    }
   isEmpty():boolean{
     return (this.front == -1);
   }
}