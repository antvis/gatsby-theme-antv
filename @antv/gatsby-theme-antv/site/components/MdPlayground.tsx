import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
import PlayGround, { PlayGroundProps } from './PlayGround';

interface MdPlaygroundProps {
  examples: PlayGroundProps[];
  path: string;
  height?: number;
  rid?: string;
}

const MdPlayGround: React.FC<MdPlaygroundProps> = ({
  examples,
  path,
  rid,
  height = 400,
}) => {
  if (!examples || !examples.length || !path) return null;
  const example = examples.find((item) => item.relativePath === path);
  if (!example) return null;
  return (
    <PlayGround
      source={example.source}
      babeledSource={example.babeledSource}
      playground={example.playground}
      filename="basic.jsx"
      height={height}
      replaceId={rid}
    />
  );
};

export default MdPlayGround;
