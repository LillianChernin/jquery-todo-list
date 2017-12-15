console.log("JS is working!");
console.log($("h1").text());

const deleteButton = "<button class=" + "delete" + ">Delete</button>";
const completeButton = "<button class=" + "complete" + ">Completed?</button>";

$('#addToDo').click(() => {
  let postText = $('input').val();
  $('ol').prepend("<li>" + completeButton + " " + postText + " " + deleteButton + "</li>");
  $('input').val("");
})

$('.delete').click(() => {
  $(this).parent().remove();
  console.log("delete button was clicked!");
})
