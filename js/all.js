let loginBtn = document.getElementById("login");
let modal = document.getElementById("modal");
let closeBtn = document.getElementById("close");

loginBtn.addEventListener("click", function () {
    modal.classList.remove("opacity-0", "pointer-events-none");
});

closeBtn.addEventListener("click", function () {
    modal.classList.add("opacity-0", "pointer-events-none");
});

function renderList(id) {
    const listUl = document.getElementById(id);
    let originColor = "text-green-400";
    if (id === "list2") {
        originColor = "text-white";
    }
    const templateLi = `
      <li class="flex items-center mt-4">
        <i class="far fa-check-circle ${originColor}"></i>
         <span
             class=" pl-3 ${originColor} tracking-wide">免費使用</span>
      </li>
  `;

    let str = "";
    for (let i = 0; i < 5; i++) {
        str = str + templateLi;
    }
    listUl.innerHTML = str;
}

renderList("list1");
renderList("list2");
renderList("list3");
