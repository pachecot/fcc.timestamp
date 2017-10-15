
import * as express from "express"
const app = express();

enum Months {
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
}

const getDateInfo = (d: Date) => {
    return {
        "unix": d.valueOf() / 1000,
        "natural": `${Months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
    };
};

const fromUnix = (v: number) => new Date(v);

const fromString = (v: string) => new Date(v);

const parseDate = (id: string) => {
    const v = Number.parseInt(id);
    return isNaN(v) ?
        fromString(id) : fromUnix(v * 1000);
}

app.get('/:id?', function (req, res) {
    const id = req.params.id;
    if (!id) {
        res.send();
    }
    else {
        const d = parseDate(id);
        res.send(getDateInfo(d));
    }
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
