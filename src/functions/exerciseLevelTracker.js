class JSONData {
  constructor(data) {
    this.data = this.removeDuplicateTexts(data);
  }

  removeDuplicateTexts(data) {
    const uniqueTexts = new Set();
    const newData = [];

    for (let i = 0; i < data.length; i++) {
      const section = data[i];

      if (section.text && !uniqueTexts.has(section.text)) {
        newData.push(section);
        uniqueTexts.add(section.text);
      } else if (section.text) {
        console.log(`Duplicate text section found: "${section.text}"`);
      } else if (section.questions) {
        newData.push(section);
      }
    }
    // console.log(newData);
    return newData;
  }

  getQuestions() {
    const questions = [];

    for (let i = 0; i < this.data.length; i++) {
      const section = this.data[i];

      if (section.questions) {
        questions.push(...section.questions);
      }
    }

    return questions;
  }

  getTexts() {
    const texts = [];

    for (let i = 0; i < this.data.length; i++) {
      const section = this.data[i];

      if (section.text) {
        texts.push(section.text);
      }
    }

    return texts;
  }

  getTextsLength() {
    const lengths = [];

    for (let i = 0; i < this.data.length; i++) {
      const section = this.data[i];

      if (section.text) {
        lengths.push(section.text.length);
      }
    }

    return lengths;
  }

  getTextsLengthRanking() {
    const lengths = this.getTextsLength();
    const sortedLengths = lengths.slice().sort((a, b) => b - a);
    const ranking = [];

    for (let i = 0; i < sortedLengths.length; i++) {
      const length = sortedLengths[i];
      const index = lengths.indexOf(length);
      const text = this.data[index].text;
      ranking.push({ text, length });
    }

    return ranking;
  }

  getTextsByDifficultyAndLength(difficulty) {
    let minLength, maxLength;
    switch (difficulty) {
      case "beginner":
        minLength = 0;
        maxLength = 99;
        break;
      case "intermediate":
        minLength = 100;
        maxLength = 249;
        break;
      case "advanced":
        minLength = 250;
        maxLength = Infinity;
        break;
      default:
        return null;
    }
    return this.data.filter(
      (item) => item.text.length >= minLength && item.text.length <= maxLength
    );
  }
}
export default JSONData;
