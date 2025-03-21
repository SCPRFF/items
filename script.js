fetch("test.json")
.then(function(response){
    return response.json();
})
.then(function(test){
    let placeholder = document.querySelector("#data-output")
    let out= "";
    for(let tested of test){
        out += `
            <tr>
                <td>${tested.id}</td>
                <td> <img src='${tested.image}'> </td>
                <td>${tested.name}</td>
                <td>${tested.price}</td>
                <td>${tested.type}</td>
                <td>${tested.quality}</td>
                <td>${tested.for}</td>
            <tr>
        `;
    }

    placeholder.innerHTML = out;
})
