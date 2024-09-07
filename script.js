function Add() {
    var sfirst = document.getElementById("first").value;
    var ssecond = document.getElementById("second").value;
    var first = parseInt(sfirst);
    var second = parseInt(ssecond);
    var z = first + second;
    alert(z);
}
function Changing() {
    var color = document.getElementById("textcolor").value;
    document.getElementById("textcontent").style.color = color;
}

function changeFontsize() {
    var fontsize = document.getElementById("drpFontsize").value;
    document.getElementById("textcontent").style.fontSize = fontsize;
}

var isbold = false;
function makeBold() {
    if (isbold) {
        document.getElementById("makebold").style.fontWeight = 900;
        document.getElementById("textcontent").style.fontWeight = 900;
    }
    else {
        document.getElementById("makebold").style.fontWeight = 500;
        document.getElementById("textcontent").style.fontWeight = 500;
    }
    isbold = !isbold;
}

var italic = false;
function makeItalic() {
    if (italic) {
        document.getElementById("textcontent").style.fontStyle = "italic";
    }
    else {
        document.getElementById("textcontent").style.fontStyle = "normal";
    }
    italic = !italic;
}

var underline = false;
function makeUnderline() {
    if (underline) {
        document.getElementById("textcontent").style.textDecoration = "underline";
    }
    else {
        document.getElementById("textcontent").style.textDecoration = "none";
    }
    underline = !underline;
}

var Direction = false;
function makeDirection() {
    if (Direction) {
        document.getElementById("textcontent").style.direction = "rtl";
    }
    else {
        document.getElementById("textcontent").style.direction = "ltr";
    }
    Direction = !Direction;
}