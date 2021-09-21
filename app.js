
// jokes data
const jokes = [{
    message: 'Why was the math teacher late to work? She took the rhombus.'
}, {
    message: "I'm really excited for the next autopsy club. It's open Mike night!"
},
{
    message: "Where do spiders seek health advice? WebMD."
}, {

    message: `What did Yoda say when he saw himself in 4K? "HDMI.`
}, {
    message: `I'd lzxczxcen shoe?`
}
, {
    message: `I'd likeasdasday. Wooden shoe?`
}
, {
    message: `I'd like sddzxcay. Wooden shoe?`
}
, {
    message: `I'd like aasdzxcWooden shoe?`
}
, {
    message: `I'd asdasdzxczxchoe?`
}
]

// random picker

//logs the randomly picked jokes

const aRandomJoke = () => {

    const numOfJokes = jokes.length;

    const randomNumGenerator = () => {
        return Math.floor(Math.random() * numOfJokes);
    }

    const randomArr = []

    //push random namber within the range of data length 
    while (randomArr.length !== jokes.length) {
        let picker = randomNumGenerator();
        if (!randomArr.includes(picker)) {
            randomArr.push(picker)
        }
    }

    //console.log(randomArr)

    const logFunction = jokes.map(data => {

        return {
            _message: data.message,
            get joke() {
                return this._message;
            }
        }
    })

    //console log all jokes
    for (let i = 0; i < randomArr.length; i++) {
        console.log(logFunction[randomArr[i]].joke)
    }

}

aRandomJoke();

