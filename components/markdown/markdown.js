import PropTypes from 'prop-types';
import { unified } from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import CustomLink from './customLink';

export default function PrintMarkdown({ markdown }) {
  const content = unified()
    .use(parse)
    .use(remark2react, {
      remarkReactComponents: {
        a: CustomLink,
      },
    })
    .processSync(markdown).result;

  return (
    <div>
      {content}
    </div>
  );
}

PrintMarkdown.propTypes = {
  markdown: PropTypes.string.isRequired,
};