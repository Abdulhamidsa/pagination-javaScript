const myitems = [
    "what is this",
    "but this is",
    "if this was",
    "what was about",
    "dogs and people",
    "cat",
    "stinky",
    "poopoo",
    "peepee",
    "weather",
    "food",
    "tmr",
    "brb",
    "oh",
    "no",
    "our",
    "table",
    "it",
    "is",
    "broken",
    "haa",
    "haa",
    "thanks",
    "boi",
];
const list_element = document.getElementById("list");
const pagination_element = document.getElementById("pagination");
let current_page = 1;
let rows = 5;

function DisplayList(items, wrapper, rows_per_page, page) {
    wrapper.innerHTML = "";
    page--;
    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);

    for (let i = 0; i < paginatedItems.length; i++) {
        let item = paginatedItems[i];
        let item_element = document.createElement("div");
        item_element.classList.add("item");
        item_element.innerText = item;

        wrapper.appendChild(item_element);
    }
}

function setupPagination(items, wrapper, rows_per_page) {
    wrapper.innerHTML = "";
    let page_count = Math.ceil(items.length / rows_per_page);
    for (let i = 1; i < page_count + 1; i++) {
        pagination_buttons(i, items);
        let btn = pagination_buttons(i, items);
        wrapper.appendChild(btn);
    }
}

function pagination_buttons(page, items) {
    let button = document.createElement("button");
    button.innerText = page;
    if (current_page == page) button.classList.add("active");
    button.addEventListener("click", function() {
        current_page = page;
        DisplayList(items, list_element, rows, current_page);
        let current_btn = document.querySelector(".pagenumbers button.active");
        current_btn.classList.remove("active");
        button.classList.add("active");
    });
    return button;
}
DisplayList(myitems, list_element, rows, current_page);
setupPagination(myitems, pagination_element, rows);