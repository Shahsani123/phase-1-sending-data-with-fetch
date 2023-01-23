function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ name, email })
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Error submitting data');
        })
        .then(data => {
            if (data.id) {
                let result = document.getElementById("result");
                if (!result) {
                    result = document.createElement("UL");
                    result.id = "result";
                    document.body.appendChild(result);
                }
                let node = document.createElement("LI");
                let textnode = document.createTextNode(data.id);
                node.appendChild(textnode);
                result.appendChild(node);
            }
        })
        .catch(error => {
            console.log(error);
            let errorMessage = document.createElement('p');
            errorMessage.textContent = error.message;
            errorMessage.style.color = 'red';
            document.body.appendChild(errorMessage);
        });
}
