const scratchpad = document.querySelector(".scratchpad");
const scratchTop = document.getElementById("topline")
const scratchBottom = document.getElementById("bottomline")
const buttons = document.querySelectorAll(".button");


function updateTopScratch(a) {
    scratchTop.textContent += a
}

function updateBottomScratch(a) {
    scratchBottom.textContent += a;
}

function clearScratchpad() {
    scratchBottom.textContent = '';
    scratchTop.textContent = '';
}



buttons.forEach((button) =>
{
    button.addEventListener("click", (event) =>
    {
      if (event.target.classList.contains("number")) {
        updateBottomScratch(event.target.textContent);
      }
      else if (event.target.classList.contains("function")) {
        console.log("It was a function button")
        if (event.target.id === ("clear")) {
            clearScratchpad();
        }
        else if (event.target.id === ("backspace")) {
            const currentText = scratchBottom.textContent;
            const updatedText = currentText.substring(0, currentText.length - 1);
            scratchBottom.textContent = updatedText;
        }
        else if (event.target.id === ("add")) {
            updateTopScratch(scratchBottom.textContent + " + ");
            scratchBottom.textContent = '';
        }
        else if (event.target.id === ("subtract")) {
            updateTopScratch(scratchBottom.textContent + " - ");
            scratchBottom.textContent = '';
        }
        else if (event.target.id === ("multiply")) {
            updateTopScratch(scratchBottom.textContent + " * ");
            scratchBottom.textContent = '';
        }
        else if (event.target.id === ("divide")) {
            updateTopScratch(scratchBottom.textContent + " / ");
            scratchBottom.textContent = '';
        }
        else if (event.target.id === ("decimal")) {
            updateBottomScratch('.')
        }
        // else if (event.target.id === ("posneg")) {
        //     if (event.target.textContent[0] === '-'){
        //         const convert = event.target.textContent.slice(1);
        //         updateBottomScratch(convert)
        //     }
        //     else {
        //         const convert = '-' + scratchBottom.textContent;
        //         updateBottomScratch(convert);
        //     }
        // }
        else if (event.target.id === ("equals")) {
            const equate = eval(scratchTop.textContent + scratchBottom.textContent);
            clearScratchpad()
            updateTopScratch(equate);
        }
      }
    });
});


