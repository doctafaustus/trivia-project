let questionIndex = 0;

$('.answer-btn').click(function() {

  const $btn = $(this);
  if ($btn.hasClass('locked')) return;

  const selectedAnswer = $btn.find('span').attr('id').replace('question-', '');
  const correctAnswer = questions[questionIndex].answer;
  const $correctAnswerBtn = $('#question-' + correctAnswer).closest('.answer-btn');
  $btn.addClass('selected');
  $('.answer-btn').addClass('locked');

  setTimeout(() => {
    if (selectedAnswer === correctAnswer) {
      $btn.addClass('correct');
    } else {
      $correctAnswerBtn.addClass('incorrect');
    }

    setTimeout(() => {
      questionIndex++;
      if (questionIndex === questions.length) return shrinkAnswers();
      populateQuestion(questionIndex);
    }, 2300);
  }, 1000);
});


const questions = [
  {
    question: 'Which of the following planets is the closest to the Sun?',
    a: 'Mars',
    b: 'Venus',
    c: 'Mercury',
    d: 'Earth',
    answer: 'c'
  },
  {
    question: 'Regarding the candy, what does \'M&M\' stand for?',
    a: 'Mars and Murrie',
    b: 'Marshall Mathers',
    c: 'Mine & Mine',
    d: 'Mr. Murphy\'s',
    answer: 'a'
  },
  {
    question: 'Which literary character killed the monster "Grendel"?',
    a: 'Achilles',
    b: 'Perseus',
    c: 'Hercules',
    d: 'Beowulf',
    answer: 'd'
  },
  {
    question: 'What 1990\'s fad involved something known as a slammer?',
    a: 'Tamagotchi',
    b: 'Pogs',
    c: 'Pokemon',
    d: 'Beanie Babies',
    answer: 'b'
  },
  {
    question: 'Which car company manufactures the "Navigator"?',
    a: 'Nissan',
    b: 'Honda',
    c: 'GMC',
    d: 'Lincoln',
    answer: 'd'
  }
];

function populateQuestion(questionNum) {
  $('.answer-btn').removeClass('locked selected correct incorrect');
  populateText('#question-title', questions[questionIndex].question);
  populateText('#question-a', questions[questionIndex].a);
  populateText('#question-b', questions[questionIndex].b);
  populateText('#question-c', questions[questionIndex].c);
  populateText('#question-d', questions[questionIndex].d);
}

function populateText(selector, text) {
  $(selector).animate({opacity: 0}, function() {
    $(this).text(text).animate({opacity: 1});  
  });
}

populateQuestion(questionIndex);

function shrinkAnswers() {
  $('#demo-answers, #question-title').fadeOut(function() {
    $('#demo-question').addClass('grow');
    $('#question-title').text('Join a live game for more!').addClass('shifted').fadeIn();
  });
}