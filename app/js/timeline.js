//timeline events
var event__item = document.getElementsByClassName("event__item");

var item__0 = event__item.item(0);
var item__1 = event__item.item(1);
var item__2 = event__item.item(2);
var item__3 = event__item.item(3);

//timeline text
var timeline = document.getElementsByClassName("timeline__text");
var text__0 = timeline.item(0);
var text__1 = timeline.item(1);
var text__2 = timeline.item(2);
var text__3 = timeline.item(3);

var deselect = function(){
    item__0.classList.remove("event__item--selected");
    item__1.classList.remove("event__item--selected");
    item__2.classList.remove("event__item--selected");
    item__3.classList.remove("event__item--selected");

    text__0.classList.add("visually-hidden");
    text__1.classList.add("visually-hidden");
    text__2.classList.add("visually-hidden");
    text__3.classList.add("visually-hidden");
};

//starts with item__0 selected
deselect();
item__0.classList.add("event__item--selected");
text__0.classList.remove("visually-hidden");

//TODO: repetetive
item__0.onclick = function(){
    deselect();
    item__0.classList.add("event__item--selected");
    text__0.classList.remove("visually-hidden");
};

item__1.onclick = function(){
    deselect();
    item__1.classList.add("event__item--selected");
    text__1.classList.remove("visually-hidden");
};
item__2.onclick = function(){
    deselect();
    item__2.classList.add("event__item--selected");
    text__2.classList.remove("visually-hidden");
};
item__3.onclick = function(){
    deselect();
    item__3.classList.add("event__item--selected");
    text__3.classList.remove("visually-hidden");
};