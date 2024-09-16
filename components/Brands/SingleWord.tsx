import React from "react";

interface SingleWordProps {
  word: string;
  color?: string;
  className?: string;
}

const SingleWord: React.FC<SingleWordProps> = ({ word, color = '#e8ffb1', className = '' }) => {
  return (
    <span style={{ color }} className={className}>
      {word}
    </span>
  );
};

export default SingleWord;