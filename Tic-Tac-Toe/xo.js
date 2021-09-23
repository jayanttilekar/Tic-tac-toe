
    let arr=[]
    let plyr=["Player 1","Player 2"]
    let count = 1;
    let cov = document.getElementById("cover")
    let instruc = document.getElementById("instruc")
    let winner = document.getElementById("win_name")
    let new_gm = document.getElementById("new_gm")


new_gm.addEventListener("click",function(){
    location.reload();
})   

for(let i=1;i<=9;i++){
    arr[i]=document.getElementById(i)
    document.getElementById(i).innerHTML=""
}

for(let i=1;i<=9;i++){
    arr[i].addEventListener("click",function()
    {
        if(document.getElementById(i).innerHTML=="")
        {
         document.getElementById(i).innerHTML="X";
         instruc.innerHTML=plyr[1]+" chance"
        if(count%2==0)
        {
            document.getElementById(i).innerHTML="O";
            instruc.innerHTML=plyr[0]+" chance"     
        }
        checkcombi();
        count++;
       }
    })
}

function checkcombi(){
           
                   /*horizontal cond*/
        if(document.getElementById(1).innerHTML=="X" && document.getElementById(2).innerHTML=="X" && document.getElementById(3).innerHTML=="X"
          || document.getElementById(1).innerHTML=="O" && document.getElementById(2).innerHTML=="O" && document.getElementById(3).innerHTML=="O"
        )
        {
          for(let i =1;i<=3;i++)
          {
           arr[i].style = "background-color:#8dfa4486;border-style: solid;text-align: center;"
          }
          instruc.innerHTML="Finished"      
          cov.style="visibility:visible;"
          if(count%2==0)
          {
            winner.innerHTML =plyr[1]+" is the winnner" 
          }
          else{
            winner.innerHTML =plyr[0]+" is the winnner"   
          }
        }     

        else if(document.getElementById(4).innerHTML=="X" && document.getElementById(5).innerHTML=="X" && document.getElementById(6).innerHTML=="X"
          || document.getElementById(4).innerHTML=="O" && document.getElementById(5).innerHTML=="O" && document.getElementById(6).innerHTML=="O"
        )
        {
          for(let i =4;i<=6;i++)
          {
           arr[i].style = "background-color:#8dfa4486;border-style: solid;text-align: center;"
          }
          instruc.innerHTML="Finished"      
          cov.style="visibility:visible;"
          if(count%2==0)
          {
            winner.innerHTML =plyr[1]+" is the winnner" 
          }
          else{
            winner.innerHTML =plyr[0]+" is the winnner"   
          }
        }

        else if(document.getElementById(7).innerHTML=="X" && document.getElementById(8).innerHTML=="X" && document.getElementById(9).innerHTML=="X"
          || document.getElementById(7).innerHTML=="O" && document.getElementById(8).innerHTML=="O" && document.getElementById(9).innerHTML=="O"
        )
        {
          for(let i =7;i<=9;i++)
          {
           arr[i].style = "background-color:#8dfa4486;border-style: solid;text-align: center;"
          }
          instruc.innerHTML="Finished"      
          cov.style="visibility:visible;"
          if(count%2==0)
          {
            winner.innerHTML =plyr[1]+" is the winnner" 
          }
          else{
            winner.innerHTML =plyr[0]+" is the winnner"   
          }
        }



                    /*vertical cond*/

        else if(document.getElementById(1).innerHTML=="X" && document.getElementById(4).innerHTML=="X" && document.getElementById(7).innerHTML=="X"
          || document.getElementById(1).innerHTML=="O" && document.getElementById(4).innerHTML=="O" && document.getElementById(7).innerHTML=="O"
        )
        {
          for(let i =1;i<=7;i++)
          {
           arr[i].style = "background-color:#8dfa4486;border-style: solid;text-align: center;"
           i+=2
          }
          instruc.innerHTML="Finished"      
          cov.style="visibility:visible;"
          if(count%2==0)
          {
            winner.innerHTML =plyr[1]+" is the winnner" 
          }
          else{
            winner.innerHTML =plyr[0]+" is the winnner"   
          }
        }     

        else if(document.getElementById(2).innerHTML=="X" && document.getElementById(5).innerHTML=="X" && document.getElementById(8).innerHTML=="X"
          || document.getElementById(2).innerHTML=="O" && document.getElementById(5).innerHTML=="O" && document.getElementById(8).innerHTML=="O"
        )
        {
          for(let i =2;i<=8;i++)
          {
           arr[i].style = "background-color:#8dfa4486;border-style: solid;text-align: center;"
           i+=2
          }
          instruc.innerHTML="Finished"      
          cov.style="visibility:visible;"
          if(count%2==0)
          {
            winner.innerHTML =plyr[1]+" is the winnner" 
          }
          else{
            winner.innerHTML =plyr[0]+" is the winnner"   
          }
        }

        else if(document.getElementById(3).innerHTML=="X" && document.getElementById(6).innerHTML=="X" && document.getElementById(9).innerHTML=="X"
          || document.getElementById(3).innerHTML=="O" && document.getElementById(6).innerHTML=="O" && document.getElementById(9).innerHTML=="O"
        )
        {
          for(let i =3;i<=9;i++)
          {
           arr[i].style = "background-color:#8dfa4486;border-style: solid;text-align: center;"
           i+=2
          }
          instruc.innerHTML="Finished"      
          cov.style="visibility:visible;"
          if(count%2==0)
          {
            winner.innerHTML =plyr[1]+" is the winnner" 
          }
          else{
            winner.innerHTML =plyr[0]+" is the winnner"   
          }
        }




                   /*daigonal cond*/

        else if(document.getElementById(1).innerHTML=="X" && document.getElementById(5).innerHTML=="X" && document.getElementById(9).innerHTML=="X"
          || document.getElementById(1).innerHTML=="O" && document.getElementById(5).innerHTML=="O" && document.getElementById(9).innerHTML=="O"
        )
        {
          for(let i =1;i<=9;i++)
          {
           arr[i].style = "background-color:#8dfa4486;border-style: solid;text-align: center;"
           i+=3
          }
          instruc.innerHTML="Finished"      
          cov.style="visibility:visible;"
          if(count%2==0)
          {
            winner.innerHTML =plyr[1]+" is the winnner" 
          }
          else{
            winner.innerHTML =plyr[0]+" is the winnner"   
          }
        }     

        else if(document.getElementById(3).innerHTML=="X" && document.getElementById(5).innerHTML=="X" && document.getElementById(7).innerHTML=="X"
          || document.getElementById(3).innerHTML=="O" && document.getElementById(5).innerHTML=="O" && document.getElementById(7).innerHTML=="O"
        )
        {
          for(let i =3;i<=7;i++)
          {
           arr[i].style = "background-color:#8dfa4486;border-style: solid;text-align: center;"
           i+=1
          }
          instruc.innerHTML="Finished"      
          cov.style="visibility:visible;"
          if(count%2==0)
          {
            winner.innerHTML =plyr[1]+" is the winnner" 
          }
          else{
            winner.innerHTML =plyr[0]+" is the winnner"   
          }
        }
        else{
            if(count==9)
            {
                instruc.innerHTML="Draw"      
                winner.innerHTML = "Match is Draw"
                cov.style="visibility:visible;"
            }
        }
}