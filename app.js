console.log("JS is working!");
console.log($("h1").text());

$('button').click(() => {
  let postText = $('input').val();
  console.log(postText);
})
