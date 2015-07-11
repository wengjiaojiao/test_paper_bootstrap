var AllQuestionBank = require('./questionBank');
var _ = require('./lodash.src.js');

function scoreGetter(infors) {
  var questionBanks = AllQuestionBank();
  var sumScore = 0;

  _.forEach(infors, function(infor, key) {
    questionBanks.forEach(function(questionBank, i) {
      if(questionBank.type == "texts") {
        sumScore += textScore(infor, questionBank);
      }else if(key == questionBank.name && infor == questionBank.answer) {
        sumScore += questionBank.score;
      }
    });
  });
  return sumScore;
}


function textScore(infor, questionBank) {
  var score = 0;
  var answers = questionBank.answer;

  _.forEach(infor,function(inf, i) {
      console.log(inf);
    answers.forEach(function(answer, i) {
      if(inf == answer) {
        score += questionBank.score;
      }
    })
  })
  return score;
}
module.exports = scoreGetter;
