document.getElementById("myForm").addEventListener("submit",function(event) {
            event.preventDefault();
            alert("Form Submitted");

            const fullname = document.getElementById("fullname").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("pass").value;

            if (!fullname) {
                alert("walang nakalagay na pangalan.");
                return;
            };
            
            if (!password) {
                alert("password is needed");
                return;
            };

            if (!email) {
                alert("email is needed");
                return;
            };

            if (password.length < 8) {
                alert('Password must be greater than 8 characters long.');
                return;
            };


            const formData = {
                fullname: fullname,
                email: email,
                password: password
            };

            console.log(formData);

            const xhr = new XMLHttpRequest();
            xhr.open("GET", "submit.json", true);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    alert("Form successfully submitted!");
                    const response = JSON.parse(xhr.responseText);
                    console.log(response);
                    //document.getElementById('myform').reset();
                    document.getElementById('myForm').innerHTML = '';
                    document.getElementById('message').innerText = response.message;
                } else if (xhr.readyState === 4) {
                    alert("Error submitting form.");
                }

            };
            xhr.send(JSON.stringify(formData));

        
        });