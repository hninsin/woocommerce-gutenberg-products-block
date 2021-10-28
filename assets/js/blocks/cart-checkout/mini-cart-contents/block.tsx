/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useEffect, useRef } from '@wordpress/element';
import { useStoreCart } from '@woocommerce/base-context/hooks';

/**
 * Internal dependencies
 */
import CartLineItemsTable from '../cart/cart-line-items-table';

const MiniCartContentsBlock = (): JSX.Element => {
	const { cartItems, cartIsLoading } = useStoreCart();
	const emptyCartRef = useRef< HTMLDivElement | null >( null );

	useEffect( () => {
		// If the cart has been completely emptied, move focus to empty cart
		// element.
		if ( ! cartIsLoading && cartItems.length === 0 ) {
			if ( emptyCartRef.current instanceof HTMLElement ) {
				emptyCartRef.current.focus();
			}
		}
	}, [ cartIsLoading, cartItems.length, emptyCartRef ] );

	return ! cartIsLoading && cartItems.length === 0 ? (
		<div
			className="wc-block-mini-cart__empty-cart"
			tabIndex={ -1 }
			ref={ emptyCartRef }
		>
			{ __( 'Cart is empty', 'woo-gutenberg-products-block' ) }
		</div>
	) : (
		<CartLineItemsTable
			lineItems={ cartItems }
			isLoading={ cartIsLoading }
		/>
	);
};

export default MiniCartContentsBlock;
