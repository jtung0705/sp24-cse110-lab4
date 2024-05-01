let d = new Date();
setInterval(function(){
    let time = d.toLocaleDateString();
    console.log(time);
}, 1000);