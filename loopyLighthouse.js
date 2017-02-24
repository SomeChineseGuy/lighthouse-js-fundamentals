var loopyLighthouse = [[15, 90], [2, 5], ["Batty", "Beacon"]];
for (i = loopyLighthouse[0][0]; i <= loopyLighthouse[0][1]; i++) {
  if (i % loopyLighthouse[1][0] === 0 && i % loopyLighthouse[1][1] === 0) {
    console.log(loopyLighthouse[2][0],loopyLighthouse[2][1]);
  } else if (i % loopyLighthouse[1][0] === 0) {
    console.log(loopyLighthouse[2][0]);
  } else if (i % loopyLighthouse[1][1] === 0) {
    console.log(loopyLighthouse[2][1])
  } else {
    console.log(i)
  }
}