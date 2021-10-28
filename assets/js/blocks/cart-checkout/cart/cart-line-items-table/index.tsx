/**
 * External dependencies
 */
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { CartResponseItem } from '@woocommerce/type-defs/cart-response';
import { createRef, useEffect, useRef } from '@wordpress/element';
import type { RefObject } from 'react';
import Skeleton from '@woocommerce/base-components/skeleton';

/**
 * Internal dependencies
 */
import CartLineItemRow from './cart-line-item-row';

const LoadingSkeleton = ( { count }: { count: number } ): JSX.Element => {
	return (
		<>
			{ [ ...Array( count ) ].map( ( _x, i ) => (
				<tr key={ i } className="wc-block-cart-items__row">
					<td className="wc-block-cart-item__image">
						<Skeleton type="img" />
					</td>
					<td className="wc-block-cart-item__product">
						<Skeleton width="150px" />
						<Skeleton />
						<Skeleton height="34px" width="107px" />
					</td>
					<td className="wc-block-cart-item__total">
						<Skeleton />
					</td>
				</tr>
			) ) }
		</>
	);
};

interface CartLineItemsTableProps {
	lineItems: CartResponseItem[];
	isLoading: boolean;
	className: string;
}

const setRefs = ( lineItems: CartResponseItem[] ) => {
	const refs = {} as Record< string, RefObject< HTMLTableRowElement > >;
	lineItems.forEach( ( { key } ) => {
		refs[ key ] = createRef();
	} );
	return refs;
};

const CartLineItemsTable = ( {
	lineItems = [],
	isLoading = false,
	className,
}: CartLineItemsTableProps ): JSX.Element => {
	const tableRef = useRef< HTMLTableElement | null >( null );
	const rowRefs = useRef( setRefs( lineItems ) );
	useEffect( () => {
		rowRefs.current = setRefs( lineItems );
	}, [ lineItems ] );

	const onRemoveRow = ( nextItemKey: string | null ) => () => {
		if (
			rowRefs?.current &&
			nextItemKey &&
			rowRefs.current[ nextItemKey ].current instanceof HTMLElement
		) {
			( rowRefs.current[ nextItemKey ].current as HTMLElement ).focus();
		} else if ( tableRef.current instanceof HTMLElement ) {
			tableRef.current.focus();
		}
	};

	const products = isLoading ? (
		<LoadingSkeleton count={ lineItems.length || 3 } />
	) : (
		lineItems.map( ( lineItem, i ) => {
			const nextItemKey =
				lineItems.length > i + 1 ? lineItems[ i + 1 ].key : null;
			return (
				<CartLineItemRow
					key={ lineItem.key }
					lineItem={ lineItem }
					onRemove={ onRemoveRow( nextItemKey ) }
					ref={ rowRefs.current[ lineItem.key ] }
					tabIndex={ -1 }
				/>
			);
		} )
	);

	return (
		<table
			className={ classnames( 'wc-block-cart-items', className ) }
			ref={ tableRef }
			tabIndex={ -1 }
		>
			<thead>
				<tr className="wc-block-cart-items__header">
					<th className="wc-block-cart-items__header-image">
						<span>
							{ __( 'Product', 'woo-gutenberg-products-block' ) }
						</span>
					</th>
					<th className="wc-block-cart-items__header-product">
						<span>
							{ __( 'Details', 'woo-gutenberg-products-block' ) }
						</span>
					</th>
					<th className="wc-block-cart-items__header-total">
						<span>
							{ __( 'Total', 'woo-gutenberg-products-block' ) }
						</span>
					</th>
				</tr>
			</thead>
			<tbody>{ products }</tbody>
		</table>
	);
};

export default CartLineItemsTable;
