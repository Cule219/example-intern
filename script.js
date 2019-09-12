
const validator     = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm;
const errorMessage  = document.getElementsByClassName('error-message')[0];
const styleDesc     = document.getElementsByClassName('style-desc')[0];
const submit        = document.getElementsByName("submit")[0];


submit.addEventListener('click', () => {
    if(document.getElementsByName('email')[0].value.match(validator)) {
        styleDesc.style.display = 'none';
        submit.innerText        = 'Submitting...';
        setTimeout(thankYou, 2000);
    }
    else {
        errorMessage.children[0].style.display = 'inline';
        styleDesc.innerHTML=
        `
        <div>
            <p> Error Message - font family: Merriweather Regular; font size 12px;<p>
            <div class="colors">
                Colours: 
                <div class="color" style="margin-left: 25px;">
                    <p class="red box"><div></div>
                    #D02035</p>
                </div>
            </div>
        </div>
        `
    }
});

function thankYou() {
    document.getElementsByTagName('section')[0].innerHTML = 
    `
    <h2>Thanks for your interest!
    <p class="thank-you-message">
    We will review your application and contact you for additional information should your background and experiance meet the requirements of one of out openings.
    </p>
    `
    styleDesc.innerHTML=
    `
    <p> Thank you Message - font family: Monteserrat Bold; font size:35px;</p>
    `
    styleDesc.style.display = 'flex';
}