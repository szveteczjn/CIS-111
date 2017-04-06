"use strict";

var main = function () {

  /* Examples of jQuery selectors:
     Three ways to select the initial h2 element
     - console.log($("h2")[0].innerHTML);
     - console.log($("h2:eq(0)").html());
     - console.log($("h2").eq(0).html())

     Set style of the initial h2 using a pseudoclass selector
     - $("h2:first" ).css("color", "red");

     Change the content of the initial h2 
     - $("h2").eq(0).html("Ch-ch-ch-changes!");
     */

// Complete these eight exercises:

// 1. Select the initial h1 element.
$("h1").eq(0).css("backgroundColor", "DodgerBlue");

// 2. Select the <h2> element by its class.
$("h2.important").css("font-style", "bold");

// 3. Select all of the relevant paragraphs.
$(".relevant > p").css("font-style", "italic");

// 4. Select the first paragraph of the relevant paragraphs.
$(".relevant > p").eq(0).css("backgroundColor", "Orange");

// 5. Select the third paragraph of the relevant paragraphs.
$(".relevant > p").eq(2).css("backgroundColor", "Red");

// 6. Select the seventh relevant paragraph. 
$(".relevant > p").eq(2).css("backgroundColor", "Yellow");

// 7. Select all of the paragraphs on the page.
$("p").css("font-size", 20);

// 8. Select only the random, unattached paragraph
$("p").eq(0).css("backgroundColor", "Purple");


};

$(document).ready(main);