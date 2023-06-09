const VocabularyExerciseUI = ({ word }) => {
  return (
    <>
      <h2 className="CommonWords">Common Words:</h2>

      <p className="CommonWords">Arabic: {word.arabic}</p>
      <span className="CommonWords">
        English:{" "}
        <a
          className="CommonWords"
          href={`https://translate.google.com/#en/ar/${word.english}`}
          target="_blank"
          rel="noreferrer"
        >
          {word.english}
        </a>{" "}
      </span>
      <p className="CommonWords">Arabic sentence: {word.sentenceArabic}</p>
      <span className="CommonWords">
        English sentence:{" "}
        <a
          className="CommonWords"
          href={`https://translate.google.com/#en/ar/${word.sentenceEnglish}`}
          target="_blank"
          rel="noreferrer"
        >
          {word.sentenceEnglish}
        </a>{" "}
      </span>
    </>
  );
};

export default VocabularyExerciseUI;
