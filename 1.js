const videos = [
    "1.mp4",
    "2.mp4",
    "3.mp4"
  ];
 const randInd = Math.floor(Math.random() * videos.length);
 const x = videos[randInd];
document.getElementById("x").src = x;
