// making the class here
class typingEffect {
    constructor(txtElement, wordsBundle, time) {
        this.txtElement = txtElement;
        this.wordsBundle = wordsBundle;
        this.time = parseInt(time, 10);
        this.text = '';
        this.wordsBundleIndex = 0;
        this.deleteWord = false;
        this.func();
    }

    func() {
        console.log('hello');

        // calling the function here to go through the values
        setTimeout(() =>
            this.func(), 1000)
    }

}

// getting the things on the load 
document.addEventListener('DOMContentLoaded', (start) => {
    // gettimg the refrence here
    const txtElement = document.querySelector('.typeEffect');
    const wordsBundle = JSON.parse(txtElement.getAttribute('data-words'));
    const time = txtElement.getAttribute('data-wait');

    // initialize here

    new typingEffect(txtElement, wordsBundle.time);


})
