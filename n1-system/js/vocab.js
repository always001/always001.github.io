function checkVocab(q, userChoiceId) {
  if (userChoiceId === q.correctChoiceId) {
    // 正确
  } else {
    // 记录错题
    recordWrong(q, userChoiceId);
  }
}
