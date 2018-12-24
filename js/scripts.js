 function check(){
  var numberOne,numberTwo,numberThree,array; 
  var output; 
numberOne=parseInt(document.getElementById("one").value);
numberTwo=parseInt(document.getElementById("two").value);
numberThree=parseInt(document.getElementById("three").value);

array=[numberOne,numberTwo,numberThree];
if((isNaN(numberOne))||(isNaN(numberTwo))||(isNaN(numberThree))){
  output="please fill all the input fields";
}
  else if(numberOne<=0||numberTwo<=0||numberThree<=0){
      output="Please enter positive numbers different from zero only";
      
  }

  
  else if((numberOne + numberTwo <= numberThree &&
      numberTwo + numberOne <= numberThree) ||                               
    (numberOne + numberThree <= numberTwo &&                         
      numberThree + numberOne <= numberTwo) ||
    (numberTwo + numberThree <= numberOne && numberThree + numberTwo <= numberOne)){
        output="not a triangle";
        

    }

  else if(numberOne===numberTwo&&numberTwo===numberThree&&numberThree===numberOne){              
      output="an equilateral triangle";  
  }
  else if(numberOne===numberTwo||numberOne===numberThree||numberTwo===numberThree){
      output="an isosceles triangle";    
  }
  else if((numberOne!==numberTwo) &&

    (numberOne!==numberThree) &&            
     
    (numberTwo!== numberThree)){
      output="a scalene triangle";
  }
   else {
       output="error";
   }
   document.getElementById("demo").innerHTML="These sides("+array+")"+" create: ";
   document.getElementById("demo").innerHTML+=output; 
  }

