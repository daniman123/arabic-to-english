function splitText(text) {
  return text.split(" ");
}

function wrapWordsWithLink(words, getLink) {
  return words.map((word, index) => (
    <span key={index}>
      <a href={getLink(word)} target="_blank" rel="noreferrer">
        {word}
      </a>{" "}
    </span>
  ));
}

function getDefaultLink(word) {
  return `https://translate.google.com/#en/ar/${word}`;
}

export default function Text({ text, getLink = getDefaultLink }) {
  const words = splitText(text);
  const wordsWithLinks = wrapWordsWithLink(words, getLink);

  return <p className="text">{wordsWithLinks}</p>;
}
