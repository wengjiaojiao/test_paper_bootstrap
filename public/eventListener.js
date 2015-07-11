$("#submit").on("click", function(evt) {
  window.scroll(0, 0);
  if ($(":input[id=userclass]").val() === "") {
    alert("请输入班级");
    evt.preventDefault();
  } else if ($(":input[id=username]").val() == "") {
    alert("请输入姓名");
    evt.preventDefault();
  } else if ($(":input[id=userid]").val() == "") {
    alert("请输入学号");
    evt.preventDefault();
  } else if (isNaN(parseInt($(":input[id=userid]").val()))) {
    alert("请输入数字");
    evt.preventDefault();
  }else {
    $.post('/result', $('form').serialize(), function() {

    })
  }
});
