const loadSpinner = ["|", "/", "-", "\\", "|", "/","-","|"];
let delay = 100;

for (let spinner of loadSpinner) {
  setTimeout(() => {
    process.stdout.write(`\r ${spinner} `);
  }, delay);
  delay += 200;
}