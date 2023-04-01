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
}

export default JSONData;

// const jsonDataObj = new JSONData(jsonData);
//   console.log(jsonDataObj.getQuestions()); // prints an array of all questions in the JSON data
//   console.log(jsonDataObj.getTexts()); // prints an array of all text sections in the JSON data
//   console.log(jsonDataObj.getTextsLength()); // prints an array of the length of each "text" section in the JSON data
// console.log(jsonDataObj.getTextsLengthRanking()); // prints an array of objects containing the "text" and length of each section, ranked from high to low
