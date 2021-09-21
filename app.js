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
    message: `Why did the kid throw a stick of butter out the window? A: To see butter-fly`
}
    , {
    message: `Why didn’t the teddy bear eat dessert? He was stuffed`
}
    , {
    message: `What do you give a sick lemon? A Lemon-aid`
}
    , {
    message: `Why do you smear peanut butter in the road? To go with the traffic jam`
}
    , {
    message: `What do you call an attractive fruit? A fine-apple`
}
]

// @param numberOfJokes is a number of jokes needed by the user
// @@return number of jokes needed randomly picked from the jokes data

const aRandomJoke = (numberOfJokes) => {

    //@checker
    if (numberOfJokes > jokes.length) {
        console.log(`We have only ${jokes.length} jokes here, sorry.`)
        return `We have only ${jokes.length} jokes here, sorry.`
    }
    if (numberOfJokes < 1) {
        console.log( "Okay, I'm done! Google it yourself!")
        return "Okay, I'm done! Google it yourself!"
    }
    if (typeof numberOfJokes !== "number" ||  isNaN(numberOfJokes)) {
        console.log("Give me a number!!")
        return "Give me a number!!"
    }
    //@@ end of Checker @@


    //@ store return array of jokes
    const jokesArr = [];
    const numOfJokes = jokes.length;

    //@ random number function
    const randomNumGenerator = () => {
        return Math.floor(Math.random() * numOfJokes);
    }

    const randomArr = []

    //push random number within the range of data length 
    while (randomArr.length !== jokes.length) {
        let picker = randomNumGenerator();
        if (!randomArr.includes(picker)) {
            randomArr.push(picker)
        }
    }

    //@ map the jokes to add each a getter
    const jokesWithFunction = jokes.map(data => {

        return {
            _message: data.message,
            get joke() {
                return this._message;
            }
        }
    })

    for(let i = 0; i < numberOfJokes ; i++){
        jokesArr.push(jokesWithFunction[randomArr[i]].joke)
    }

    //logs in console when.
    console.log(`\nHope you enjoy this/these joke/s. If not, you need s*x! `);

    for(let i = 0; i < numberOfJokes ; i++){
        console.log(`\n${i+1}. ${jokesWithFunction[randomArr[i]].joke} `)
    }
    console.log(`\n`);

    //returns an array of jokes


    return jokesArr;

}

// @desc capture cmd args 
let args = process.argv[2]
//convert to int
args = +args

aRandomJoke(args)



