const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    

    let fullName = document.getElementById('fullName').value;
    console.log(fullName);
    let email= form.elements["email"].value;//form.element["name of the input field'] used to access input field value
    //form object is used to access form elements
    console.log(email);
    let password = form.elements["password"].value;
    console.log(password);
    console.log("form submitted successfully"); 
})