class Form{
constructor(){
   this.title=createElement('h2'); 

   this.input=createInput("name");

   this.button=createButton('play');

   this.greeting = createElement('h2');

}
hide(){
    this.button.hide();
    this.input.hide();
    this.greeting.hide();

}
display(){
       this.title.html("car racing 1.0");
       this.title.position(displayWidth/2-50,0);
       this.input.position(displayWidth/2-40,displayHeight/2-80);
       this.button.position(displayWidth/2+30,displayHeight/2);
       this.button.mousePressed(()=>{
       this.input.hide();
       this.button.hide();
       player.name =this.input.value();
       playerCount++;
       player.index=playerCount;
       player.updateCount(playerCount);
       player.update();
       this.greeting.html("welcome "+ player.name);
       this.greeting.position(displayWidth/2-70,displayHeight/4);
        
    })
}
}