
const deleteButton = "<button class=" + "delete" + ">X</button>";
const completeButton = "<button class=" + "complete" + ">Got'r done?</button>";


$('#addToDo').click((event) => {
  let postText = $('input').val();
  $('ol').prepend("<li>" + completeButton + " " + postText + " " + deleteButton + "</li>");
  $('input').val("");
  $('.delete').click((event) => {
    $(event.target).parent().remove();
  });
  $('.complete').click((event) => {
    $(event.target).parent().css("text-decoration", "line-through");
    $(event.target).remove();
  });
})
