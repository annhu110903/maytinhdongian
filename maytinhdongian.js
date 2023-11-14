let nhapSo = document.getElementById("nhapSo");
function inputValue(value) {
    nhapSo.value += value;
}
function result() {
    let result = eval(nhapSo.value);
    nhapSo.value = result;
}
function xoa() {
    nhapSo.value = "";
}