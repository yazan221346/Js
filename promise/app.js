testpromise = new Promise((resolve, reject) => {
    const result = 5+6;
    if(result === 10) {
        resolve("good");

    }else {
        reject("bad");
    }
});
testpromise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
}); 