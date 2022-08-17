import React from 'react';
import { createBlock, type BlockInstance } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { RadioControl } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

export function Edit( { clientId, attributes, setAttributes } ) {
	const { content, imageBlock, embedBlock } = attributes;

	const blocks: BlockInstance[] = useSelect( ( select ) =>
		select( 'core/block-editor' ).getBlocks( clientId )
	);

	const replaceInnerBlocks =
		useDispatch( 'core/block-editor' ).replaceInnerBlocks;

	useEffect( () => {
		if ( content === 'image' ) {
			const block =
				'clientId' in imageBlock
					? imageBlock
					: createBlock( 'core/image', imageBlock.attributes );
			replaceInnerBlocks( clientId, [ block ] );
		} else if ( content === 'embed' ) {
			const block =
				'clientId' in embedBlock
					? embedBlock
					: createBlock( 'core/embed', embedBlock.attributes );
			replaceInnerBlocks( clientId, [ block ] );
		}
	}, [ content ] );

	useEffect( () => {
		if ( blocks.length === 0 ) {
			return;
		}

		const block = blocks[ 0 ];

		if ( block.name === 'core/image' ) {
			setAttributes( { imageBlock: block } );
		} else if ( block.name === 'core/embed' ) {
			setAttributes( { embedBlock: block } );
		}
	}, [ blocks ] );

	return (
		<div { ...useBlockProps() }>
			<RadioControl
				selected={ content }
				options={ [
					{ label: '画像', value: 'image' },
					{ label: '動画', value: 'embed' },
				] }
				onChange={ ( content ) => setAttributes( { content } ) }
			/>

			<InnerBlocks templateLock="all" />
		</div>
	);
}
