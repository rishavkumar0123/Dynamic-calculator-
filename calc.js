function dis(n){
    console.log(`Button ${n} pressed`)
    //document.getElementById("result").value = document.getElementById("result").value=n
    document.getElementById("result").value+=n
}

function solve() {
  let val = document.getElementById("result").value;
  let result = 0;

  if (val.includes('+')) {
    let parts = val.split('+');
    result = Number(parts[0]) + Number(parts[1]);
  } else if (val.includes('-')) {
    let parts = val.split('-');
    result = Number(parts[0]) - Number(parts[1]);
  } else if (val.includes('*')) {
    let parts = val.split('*');
    result = Number(parts[0]) * Number(parts[1]);
  } else if (val.includes('/')) {
    let parts = val.split('/');
    result = Number(parts[0]) / Number(parts[1]);
  }

  document.getElementById("result").value = result;
}
function clr(){
    document.getElementById("result").value = "";
}

