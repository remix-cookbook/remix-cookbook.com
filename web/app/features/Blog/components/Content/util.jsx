import Refractor from 'react-refractor';
import js from 'refractor/lang/javascript';
import jsx from 'refractor/lang/jsx';
import tsx from 'refractor/lang/tsx';
import bash from 'refractor/lang/bash';
import typescript from 'refractor/lang/typescript';
import markdown from 'refractor/lang/markdown';
import json from 'refractor/lang/json';
import css from 'refractor/lang/css';

Refractor.registerLanguage(bash);
Refractor.registerLanguage(css);
Refractor.registerLanguage(js);
Refractor.registerLanguage(json);
Refractor.registerLanguage(jsx);
Refractor.registerLanguage(markdown);
Refractor.registerLanguage(tsx);
Refractor.registerLanguage(typescript);

export const serializers = {
  types: {
    code: props => (
      <div className="syntax-highlighter">
        <Refractor
          language={props.node.language}
          value={props.node.code}
          markers={props.node.highlightedLines}
        />
      </div>
    ),
  },
  marks: {
    highlight: props => {
      return <span style={{ backgroundColor: props.mark.color }}>{props.children}</span>;
    },
  },
};

export function blocksToText(blocks) {
  return blocks
    .filter(({ _type }) => _type === 'block')
    .map(block => block.children.map(child => child.text).join(''));
}
