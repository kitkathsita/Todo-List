function openInfo() {
  console.log('hi')
  document.getElementById("window2").style.display = "block";
}

function closeInfo() {
  document.getElementById("window2").style.display = "none";
}

export {openInfo, closeInfo}
