var Question = require('./question');

function AllQuestionBank() {
  return [
    new Question("gapOne", ["统一建模语言"], 1, "text"),
    new Question("gapTwo", ["封装性"], 1, "texts"),
    new Question("gapTwo", ["继承性"], 1, "texts"),
    new Question("gapTwo", ["多态性"], 1, "texts"),
    new Question("radioOne", "B", 2, "radio"),
    new Question("radioTwo", "A", 2, "radio"),
    new Question("checkOne", "ABD", 3, "checkbox"),
    new Question("checkTwo", "ABC", 3, "checkbox"),
    new Question("judgeOne", "F", 2, "judge"),
    new Question("judgeTwo", "T", 2, "judge"),
    new Question("textarea", "模型是对现实世界的简化和抽象。", 5, "textarea")
  ];
}

module.exports = AllQuestionBank;
