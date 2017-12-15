
const deleteButton = "<button class=" + "delete" + ">X</button>";
const completeButton = "<button class=" + "complete" + ">Got'r done?</button>";
const saveButton = "<button class=" + "save" + ">Save</button>";



const deleteToDo = () => {
  $('.delete').click((event) => {
    $(event.target).parent().remove();
  });
}

const completeToDo = () => {
  $('.complete').click((event) => {
    $(event.target).parent().css("text-decoration", "line-through");
    $(event.target).remove();
  });
}

const modifyToDo = () => {
  $('a').dblclick((event) => {
    let $currentText = $(event.target).text();
    $(event.target).parent().append(saveButton);
    $(event.target).replaceWith("<input type=" + "text" + " class=" + "updateText" + " value=" + $currentText + " >");
    $('.save').click((event) => {
      let $newText = $(event.target).parent().find('.updateText').val();
      $(event.target).parent().find('.updateText').replaceWith("<a> " + $newText + " </a>");
      $(event.target).remove();
    })
  })
}



$('#addToDo').click((event) => {
  let postText = $('input').val();
  $('ol').append("<li>" + completeButton + "<a> " + postText + " </a>" + deleteButton + "</li>");
  $('input').val("");
  deleteToDo();
  completeToDo();
  modifyToDo();
})
