import { exec } from "node:child_process";

// List of images to convert
const images = ["1984.jpg", "andThenThereWereNone.jpg", "aPromisedLand.jpg", "becoming.jpg", "daVinciCode.jpg",
  "divergent.jpg", "goodOmens.jpg", "goneGirl.jpg", "hobbit.jpg", "hungerGame.jpg",
  "martian.jpg", "rithmatist.jpg", "shining.jpg", "endUs.jpg", "harryPotter.jpg", "lord.jpg"];

// Convert each iamage to webp format
// biome-ignore lint/complexity/noForEach: <explanation>
images.forEach((image) => {
  const output = image.replace(".jpg", ".webp");
  const command = `cwebp -q 80 "${image}" -o "${output}"`;

  exec(command, (error, stderr) => {
    if (error) {
      console.error(`Erreur lors de la conversion de ${image} :`, stderr);
    } else {
      console.log(`Conversion réussie pour ${image} !`);
    }
  });
});