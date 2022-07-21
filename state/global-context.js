import { createContext, Component } from 'react';
const GlobalContext = createContext();
import PropTypes from 'prop-types';

export class GlobalProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open_interstitial: false,
            cart: [],
            wishList: [],
            pushObject: this.pushObject.bind(this),
            getCart: this.getCart.bind(this),
            getWishList: this.getWishList.bind(this),
            addProductToCart: this.addProductToCart.bind(this),
            removeProductToCart: this.removeProductToCart.bind(this),
            addProductToWishList: this.addProductToWishList.bind(this),
            removeProductToWishList: this.removeProductToWishList.bind(this),
        }
    }

    pushObject(key, value, callback) {
        this.setState({ [key]: value }, callback);
    }

    getCart() {
        const sessionStorageCart = JSON.parse(sessionStorage.getItem('cart')); // null if not exist

        if (sessionStorageCart !== null) {
            this.setState({ cart: sessionStorageCart });
        }else {
            this.setState({ cart: [] });
        }
    }

    getWishList() {
        const sessionStorageWishList = JSON.parse(sessionStorage.getItem('wishList')); // null if not exist

        if (sessionStorageWishList !== null) {
            this.setState({ wishList: sessionStorageWishList });
        }else {
            this.setState({ wishList: [] });
        }
    }

    addProductToCart(product, callback) {
        const newCart = [...this.state.cart]
        newCart.push(product)
        this.setState({ cart: newCart }, () => {
            sessionStorage.setItem('cart', JSON.stringify(newCart));

            if (typeof callback !== 'undefined') callback();
        });
    }

    removeProductToCart(id, callback) {
        const newCart = [...this.state.cart]
        const ProductIndex = newCart.findIndex(p => p.id === id);
        console.log({ProductIndex, newCart, id})
        newCart.splice(ProductIndex, 1)
        this.setState({ cart: newCart }, () => {
            sessionStorage.setItem('cart', JSON.stringify(newCart));
            if (typeof callback !== 'undefined') callback();
        });
    }

    addProductToWishList(product, callback) {
        const newWhishList= [...this.state.wishList]
        newWhishList.push(product)
        this.setState({ wishList: newWhishList }, () => {
            sessionStorage.setItem('wishList', JSON.stringify(newWhishList));

            if (typeof callback !== 'undefined') callback();
        });
    }

    removeProductToWishList(id, callback) {
        const newWhishList= [...this.state.wishList]
        const ProductIndex = newWhishList.findIndex(p => p.id === id);
        console.log({ProductIndex, newWhishList, id})
        newWhishList.splice(ProductIndex, 1)
        this.setState({ wishList: newWhishList }, () => {
            sessionStorage.setItem('wishList', JSON.stringify(newWhishList));
            if (typeof callback !== 'undefined') callback();
        });
    }

    componentDidMount() {
        this.getCart()
        this.getWishList()
    }

    render() {
        const { children } = this.props;

        return (
            <GlobalContext.Provider value={{ ...this.state }}>
                {children}
            </GlobalContext.Provider>
        );
    }
}

GlobalProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const GlobalConsumer = GlobalContext.Consumer;
export default GlobalContext;
