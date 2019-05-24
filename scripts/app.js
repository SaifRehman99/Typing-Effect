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
        // getting the index here
        const indexWords = this.wordsBundleIndex % this.wordsBundle.length;
        // getting the text of bundle words
        const textBundle = this.wordsBundle[indexWords];

        // check to delete or add the words one by one in the html
        if (this.deleteWord) {
            // remove the words
            this.text = textBundle.substring(0, this.text.length - 1);
        }
        else {
            // add the words
            this.text = textBundle.substring(0, this.text.length + 1);
        }

        // adding the text one by one in the html
        this.txtElement.innerHTML = `<span class="innerTextCursor">${this.text}</span>`

        // setting the type speed here
        let typeSpeed = 250;

        // check if word is printed and ready to delete
        if(this.deleteWord){
            typeSpeed /=2;
        }


        // check to see if the full word is printed so we can move on to the other
        if(!this.deleteWord && this.text === textBundle){
            // to make the pause effect
            typeSpeed = this.time;

            // setting it true;
            this.deleteWord = true;

        }
        else if(this.deleteWord && this.text === ''){
            this.deleteWord = false;

            // moving to the next word
            this.wordsBundleIndex++;

            // pause effect
            typeSpeed = 400;
        }

        // calling the function here to go through the values
        setTimeout(() => this.func(),typeSpeed);
    }

}

// getting the things on the load 
document.addEventListener('DOMContentLoaded', (start) => {
    // gettimg the refrence here
    const txtElement = document.querySelector('.typeEffect');
    const wordsBundle = JSON.parse(txtElement.getAttribute('data-words'));
    const time = txtElement.getAttribute('data-wait');

    // initialize here

    new typingEffect(txtElement, wordsBundle, time);


})
