[].forEach.call($(":input[name=radioOne]"), function(item, i) {
  item.onclick = function () {
      $(":input[id=answer1]").prop("value", item.value);
  };
});
[].forEach.call($(":input[name=radioTwo]"), function(item, i) {
  item.onclick = function () {
      $(":input[id=answer2]").prop("value", item.value);
  };
});
[].forEach.call($(":input[name=checkboxOne]"), function(item, i) {
  item.onclick = function () {
      var ans = '';
      $(':input[name=checkboxOne]').each(function () {
        ans += this.checked ? this.value : '';
      })
      $(":input[id=answer3]").prop("value", ans);
  };
});
[].forEach.call($(":input[name=checkboxTwo]"), function(item, i) {
  item.onclick = function () {
    var ans = '';
    $(':input[name=checkboxTwo]').each(function () {
      ans += this.checked ? this.value : '';
    })
    $(":input[id=answer4]").prop("value", ans);
  };
});
