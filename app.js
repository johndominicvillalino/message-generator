
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
    messagE: `I'd like to go to Holland someday. Wooden shoe?`
}
]

// random picker

const numOfJokes = jokes.length -1;
const picker = Math.floor(Math.random() * numOfJokes);

//logs the randomly picked jokes

const aRandomJoke = (picker) => {

    const logFunction = jokes.map(data => {

        return {
            _message: data.message,
            get joke(){
                return this._message;
            }
        }
    })

    return logFunction[picker].joke

}


console.log(aRandomJoke(picker));
