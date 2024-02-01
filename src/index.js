import "./styles.css";
import DiceBox from "@3d-dice/dice-box-threejs";

let result = 1;

// set configurations when invoking the class
const Box = new DiceBox("#app", {
  theme_customColorset: {
    // background: [
    //   "#00ffcb",
    //   "#ff6600",
    //   "#1d66af",
    //   "#7028ed",
    //   "#c4c427",
    //   "#d81128"
    // ], // randomly assigned colors
    background: "#00ffcb",
    foreground: "#ffffff",
    texture: "marble", // marble | ice
    material: "metal" // metal | glass | plastic | wood
  },
  light_intensity: 1,
  gravity_multiplier: 500,
  baseScale: 150,
  strength: 2,
  onRollComplete: (results) => {
    console.log(`I've got results :>> `, results);
  }
});

Box.initialize()
  .then(() => {
    // give code sandbox a chance to load up
    setTimeout(() => {
      Box.roll(`1d20@${getRndInteger(1, 20)}`);
    }, 1000);
  })
  .catch((e) => console.error(e));

const rollBtn = document.getElementById("rollBtn");
rollBtn.addEventListener("click", () => {
  // dynamically update the dice theme on each roll
  const colors = [
	'#55d12f',
];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  // all dice will produce the same value picked from the values list randomly
  const randomVal = getRndInteger(1, 20);

  Box.updateConfig({
    theme_customColorset: {
      background: randomColor,
      foreground: "#ffffff",
      texture: "marble", // marble | ice
      material: "plastic" // metal | glass | plastic | wood
    }
  });
  Box.roll(
    `1d20@${randomVal}`
  );
});

function getRndInteger() {
	if (result === 20) result = 1;
	return result++;
} 
