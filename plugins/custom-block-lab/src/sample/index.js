import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import { Edit } from './edit';
import { save } from './save';

registerBlockType( 'custom-block-lab/sample', {
	edit: Edit,
	save,
} );
