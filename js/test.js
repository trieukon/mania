const music2 = new Audio(`https://cdn.glitch.global/dc6948cb-dff5-4efc-86db-fe258b6f1750/IDOL_TVSIZE.mp3`)
var start = false
var s="["
document.documentElement.addEventListener('keypress',(e)=>{
    if(e.key == 'p') {
        if (start==false) {
            music2.play()
            start=true;
        }else{
            s+=music2.currentTime+", "
            console.log(s)
        }
    }
})