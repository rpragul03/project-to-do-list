
function todolist() {
    let input1 = document.getElementById("input1");
    let btn1 = document.getElementById("btn1");
    console.log(input1.value);

    let inputvalue = input1.value;

    let tododata = [

    ]

    console.log(tododata);
    function addlist() {



        let content1 = document.getElementById("content1");
        content1.className="content1";
        content1.id="content1";

        let row = document.createElement("div");
        row.className = "row";
        row.id="row";

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "checkbox";
        checkbox.name = "checkbox";
        checkbox.className = " col col-1 form-check-input checkbox check"

        row.appendChild(checkbox);

        let col1 = document.createElement("div");
        col1.className = "col col-6"

        let l1 = document.createElement("li");
        l1.id = "list1";
        l1.type = "radio";
        l1.className = "list1";
        l1.textContent = `${inputvalue}`;

        col1.appendChild(l1);




        let col2 = document.createElement("div");
        col2.className = "col col-1";
        col2.innerHTML = `<i class="fa fa-times icon1" id="icon1" aria-hidden="true">`;


        row.append(col1);
        row.append(col2);

        content1.appendChild(row);


        let datas = {
            item: inputvalue
        }
        console.log(datas);

        tododata.push(inputvalue);


        localStorage.setItem("listitems", JSON.stringify(tododata));

        let getitem = localStorage.getItem("listitems");
        let getitem1 = JSON.parse(getitem);
        console.log(getitem1);

        input1.value = "";
        console.log(l1);




    }
    addlist();

    // remove content start

    function removelist() {
        let content1 = document.querySelectorAll("#content1")
        console.log(content1);
        content1.forEach(content => {
            content.addEventListener("click", (event) => {
                console.log(event.target.classList.contains("icon1"));
                let icon1 = event.target.classList.contains("icon1");
                if (event.target.classList.contains("icon1")) {
                    console.log(event.target.parentNode.parentNode);
                    let rem = event.target.parentNode.parentNode;
                    rem.remove();


                }
            })
        })
    } removelist()

// remove end






}
btn1.addEventListener("click", todolist);





