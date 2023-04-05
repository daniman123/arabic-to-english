export default function Text({ text }) {
    return (
      <p className="text">
        {text.split(" ").map((word, index) => (
          <span key={index}>
            <a
              href={`https://translate.google.com/#en/ar/${word}`}
              target="_blank"
              rel="noreferrer"
            >
              {word}
            </a>{" "}
          </span>
        ))}
      </p>
    );
  }

