export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
// action creator
export const createProduct = (product) => {
    return {
        type: CREATE_PRODUCT,
        payload: {
            productId: product.id,
            productName: product.name,
            productTotalPrice: product.totalPrice,
            productImg: product.img,
        }
    }
}

export const updateProduct = (product) => {
    return {
        type: UPDATE_PRODUCT,
        payload: {
            productId: product.id,
            productName: product.name,
            productLogo: product.logo,
            productThumbnail: product.thumbnail,
        }
    }
}

export const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: {
            productId: id,
        }
    }
}