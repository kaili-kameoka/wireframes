import postcssSimpleVars from 'postcss-simple-vars';
import postcssNesting from 'postcss-nesting';
import postcssComment from 'postcss-comment'
import postcssMixins from 'postcss-mixins';

export default {
	plugins: [
		postcssSimpleVars,
		postcssNesting,
			postcssMixins
	],
	parser: postcssComment
};