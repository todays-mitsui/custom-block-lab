import React from 'react';
import { useBlockProps } from '@wordpress/block-editor';

export function save( { attributes } ) {
	const { message } = attributes;

	return (
		<div { ...useBlockProps.save() }>
			<p className="message">{ message }</p>
		</div>
	);
}
