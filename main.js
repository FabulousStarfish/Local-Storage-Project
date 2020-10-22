function change(){
    user1=document.getElementById("name1").value;
    user2=document.getElementById("name2").value;
    localStorage.setItem("User1Name",user1);
    localStorage.setItem("User2Name",user2);
    window.location.replace("game.html");
}