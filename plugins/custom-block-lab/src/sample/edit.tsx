import React from 'react';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export function Edit( { attributes, setAttributes } ) {
	const { message } = attributes;

	return (
		<div { ...useBlockProps() }>
			<RichText
				className="message"
				tagName="p"
				value={ message }
				onChange={ ( message ) => setAttributes( { message } ) }
				placeholder="テキストを入力"
			/>
		</div>
	);
}
