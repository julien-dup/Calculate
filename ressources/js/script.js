let myOperation = 0
    const myButton = document.querySelectorAll("button[data-button=number]")
    const buttonFunction = document.querySelectorAll("button[data-button=fonction]")
    const buttonSelf = document.querySelectorAll("button[data-button=self]")
    const additioner = document.querySelector("button[data-self=addition]")




    myButton.forEach(element => {
      element.addEventListener("click", function () {
        result.value += this.dataset.self
        element.className = "buttonClick"
      })
    })

    buttonFunction.forEach(element => {
      element.addEventListener("click", function () {
          myOperation = result.value + this.dataset.self
          result.value = ''
          element.className = "buttonClick"
      }) 
    })

    egal.addEventListener("click", function () {
      let myResult = eval(myOperation + result.value)
      result.value =myResult
      egal.className = "buttonClick"
    })

    reset.addEventListener("click", function() {
        result.value =''
        myOperation =''
        reset.className = "buttonClick"
    })