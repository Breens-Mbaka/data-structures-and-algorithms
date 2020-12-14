
function grocery() {
    var items = [];
    var item1 = items.push(prompt("Item 1:"));
    var item2 = items.push(prompt("Item 2:"));
    var item3 = items.push(prompt("Item 3:"));
    var item4 = items.push(prompt("Item 4:"));
    var item5 = items.push(prompt("Item 5:"));

    items.sort().forEach(function (item) {
        console.log(item);
    });    
}