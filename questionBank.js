var Question = require('./question');

function AllQuestionBank() {
  return [
    new Question("gapOne", "统一建模语言", 1),
    new Question("gapTwo", "封装性继承性多态性", 3),
    new Question("radioOne", "B", 2),
    new Question("radioTwo", "A", 2),
    new Question("checkOne", "ABD", 3),
    new Question("checkTwo", "ABC", 3),
    new Question("judgeOne", "F", 2),
    new Question("judgeTwo", "T", 2),
    new Question("textarea", "模型是对现实世界的简化和抽象。", 5)
  ];
}

module.exports = AllQuestionBank;
