import postcssSimpleVars from 'postcss-simple-vars';
import postcssNesting from 'postcss-nesting';
import postcssComment from 'postcss-comment'
export default {
	plugins: [
		postcssSimpleVars,
		postcssNesting,
	],
	parser: postcssComment
};