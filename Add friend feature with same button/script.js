 var a = document.querySelector("h4")

 var addfriend = document.querySelector(".Add")

var K=0
addfriend.addEventListener("click",function(){
if(K==0){

      a.innerHTML = "Friends"
      a.style.color="lightseagreen"
      addfriend.innerHTML="Remove friend"
  
   K=1
}

else{
   
      a.innerHTML = "Stranger"
      a.style.color="red"
      addfriend.innerHTML="Add friend"  

   
   K=0
}
})
 


