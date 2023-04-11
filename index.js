window.addEventListener("load", function(event){
    listenForInput()
    const form=document.querySelector("#contact-form")
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        const formData= new FormData(form)
        console.log("formdata",formData)
        const firstname = formData.get("firstname")
        console.log("first name", firstname)
        const actualData = Object.fromEntries(formData)
        console.log("actual Data", actualData)

        this.alert("Your submission has been received successsfully. Thank you.")

    })
    

})

function listenForInput(){
    const firstNameInput = document.querySelector("#firstname")
    firstNameInput.addEventListener("input", function(event){
        console.log(firstNameInput.value)
    })

    const lastNameInput = document.querySelector("#lastname")
    lastNameInput.addEventListener("input", function(event){
        console.log(lastNameInput.value)
    })

    const emailInput = document.querySelector("#email")
    emailInput.addEventListener("input", function(event){
        console.log(emailInput.value)
    })

    const question = document.querySelector("#questionInput")
    question.addEventListener("input", function(event){
        console.log(question.value)
    })
}



    