// set current date
const d = new Date()
document.getElementById('current_date_p').innerHTML = d.toLocaleDateString();

/**
 * Convert number to words. For example 110 => one hundred ten
 * @param {Number} number - the amount the user put
 * @returns
 */
function NumInWords (number) {
    const first = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    const tens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    const mad = ['', 'thousand', 'million', 'billion', 'trillion'];
    let word = '';
    for (let i = 0; i < mad.length; i++) {
      let tempNumber = number%(100*Math.pow(1000,i));
      if (Math.floor(tempNumber/Math.pow(1000,i)) !== 0) {
        if (Math.floor(tempNumber/Math.pow(1000,i)) < 20) {
          word = first[Math.floor(tempNumber/Math.pow(1000,i))] + mad[i] + ' ' + word;
        } else {
          word = tens[Math.floor(tempNumber/(10*Math.pow(1000,i)))] + '-' + first[Math.floor(tempNumber/Math.pow(1000,i))%10] + mad[i] + ' ' + word;
        }
      }

      tempNumber = number%(Math.pow(1000,i+1));
      if (Math.floor(tempNumber/(100*Math.pow(1000,i))) !== 0) word = first[Math.floor(tempNumber/(100*Math.pow(1000,i)))] + 'hunderd ' + word;
    }
      return word;
}

/**
 * Remove all the existing checkmark and add the new one to selected id
 * @param {Number} id - id for the radio checkbox
 */
function setRadioCheckmark(id){
    const all_checkbox = document.getElementsByClassName('checkbox');
    for (let i = 0; i < all_checkbox.length; i++) {
        all_checkbox[i].innerHTML = '';
    }
    document.getElementById(`${id}_p`).innerHTML = '✔';
}

/**
 * Run this function when the inout event change
 * @param {Object} event
 * @returns
 */
function inputChange(event){
    let val = event.target.value,
        id = event.target.id;
    if (id === "amount") {
        document.getElementById('amount_in_text_p').innerHTML = NumInWords(val);
        val = `$ ${val}.00`;
    }
    if (event.target.type === "radio") {
        setRadioCheckmark(id);
        return;
    }
    document.getElementById(`${id}_p`).innerHTML = val;
}

/**
 * Download the receipt as a pdf or jpg
 * @param {Object} event
 */
function downloadReceipt(event){
    event.preventDefault();
    document.getElementById('form').style.display = "none";
    window.print();
    document.getElementById('form').style.display = "block";
}

//Input events
const inputs = document.getElementsByTagName('input');
for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    input.addEventListener('input', inputChange);
}

document.getElementById('submit_btn').addEventListener('click', downloadReceipt);
