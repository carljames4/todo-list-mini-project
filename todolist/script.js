        let list = [];

        function addlist() {
            let value = document.getElementById("input").value;

            list.push(value);

            showlist();
        }

        function showlist() {
            let text = ""
            for(let i = 0; i < list.length ; i++) {
                text += `${list[i]} <button onclick="deletelist(${i})">delete</button><br>`;

            }
                document.getElementById("output").innerHTML = text;
        }

        function deletelist(index) {
            list.splice(index, 1);
            showlist();
        }
