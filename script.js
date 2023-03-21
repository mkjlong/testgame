const ctx = document.getElementById("canvas").getContext("2d");
const canvas = document.getElementById("canvas");
let p = {x: 0, y: 0}
function update(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "green";
  ctx.fillRect(p.x, p.y, 100, 100);
}
window.resize = window.onload = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  update()
}
setInterval(() => {
document.addEventListener('keydown', function(e) {
  update()
    if(e.key == "a") {
      p.x -= 50
    }
    if(e.key == "d") {
        p.x += 50
    }
    if(e.key == "w") {
        p.y -= 50
    }
    if(e.key == "s") {
        p.y += 50
    }
});
});
/*
let ong = new Image();
ong.src = "https://cdn.glitch.global/9886dd8c-adb0-416d-b8b8-8ed897b32f2d/thumbnails%2Fblueexplosion.png?1679359869365";
canvas.width = window.innerWidth, canvas.height = window.innerHeight;
ctx.drawImage(ong, (canvas.width / 2), (canvas.height / 2), ong.width, ong.height);
*/