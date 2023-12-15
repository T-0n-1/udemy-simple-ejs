import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
const date = new Date();
const day = date.getDay();
const weekDay = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednsday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
};
let text = "";
const texts = {
    0: "it's time to work hard",
    1: "last day of work - you can do it",
    2: "weekend - time to have fun"
};
if (day >= 1 || day < 5) text = texts[0];
if (day === 5) text = texts[1];
if (day === 6 || day === 0) text = texts[2];

app.get("/", (req, res) => {
  res.render(__dirname + '/views/index.ejs', { 
                day: weekDay[day],
                text: text
            });
});

app.listen(port, () => console.log(`App listening at port ${port}`));