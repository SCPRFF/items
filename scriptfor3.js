fetch("actual_3.json")
    .then(response => response.json())
    .then(actualData => {
        return fetch("test.json")
            .then(response => response.json())
            .then(testData => {
                // Extract the three IDs from actual_3.json
                let selectedIDs = Object.values(actualData[0]);

                // Filter the test.json data based on selected IDs
                let filteredData = testData.filter(item => selectedIDs.includes(item.id));

                let placeholder = document.querySelector("#data-output");
                let out = "";
                filteredData.forEach((tested, index) => {
                    out += `
                        <div id="object${index + 1}">
                            <img src='${tested.image}' id="img${index + 1}">
                            <strong id="name${index + 1}">${tested.name}</strong>
                            <span id="price${index + 1}">${tested.price}</span>
                            <span id="type${index + 1}">${tested.type}</span>
                            <span id="quality${index + 1}">${tested.quality}</span>
                            <span id="for${index + 1}">${tested.for}</span>
                            <button id="btn${index + 1}">Buy in-game</button>
                        </div>
                    `;
                });

                placeholder.innerHTML = out;
            });
    })
    .catch(error => console.error("Error fetching data:", error));
