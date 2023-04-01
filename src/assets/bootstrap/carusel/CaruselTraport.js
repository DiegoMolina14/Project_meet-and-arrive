
import Imgen2 from "../../img/avionIcono.jpg";
import Imgen3 from "../../img/aboutImg3.jpg";
import Image4 from "../../img/trenIcono.jpg";
import Imgen1 from "../../img/busIcono.jpg";
import Imgen5 from "../../img/gasIcono.jpg";
import Imgen6 from "../../img/hospIcono.jpg";



export const CaruselTraport = {
        getProductsData() {
            return [
                {
                    id: '1000',
                    code: 'f230fh0g3',
                    name: 'Servicio Medico',
                    description: 'Product Description',
                    image: Imgen6,
                    price: 65,
                    category: 'Accessories',
                    quantity: 24,
                    inventoryStatus: 'INSTOCK',
                    rating: 5
                },
                {
                    id: '1000',
                    code: 'f230fh0g3',
                    name: 'Estacion de Gasolinera',
                    description: 'Product Description',
                    image: Imgen5,
                    price: 65,
                    category: 'Accessories',
                    quantity: 24,
                    inventoryStatus: 'INSTOCK',
                    rating: 5
                },
                {
                    id: '1000',
                    code: 'f230fh0g3',
                    name: 'Estacion de Microbus',
                    description: 'Product Description',
                    image: Imgen1,
                    price: 65,
                    category: 'Accessories',
                    quantity: 24,
                    inventoryStatus: 'INSTOCK',
                    rating: 5
                },
                {
                    id: '1000',
                    code: 'f230fh0g3',
                    name: 'Estacion de Auropuerto',
                    description: 'Product Description',
                    image: Imgen2,
                    price: 65,
                    category: 'Accessories',
                    quantity: 24,
                    inventoryStatus: 'INSTOCK',
                    rating: 5
                },
                {
                    id: '1001',
                    code: 'nvklal433',
                    name: 'Estacion de Tren',
                    description: 'Product Description',
                    image: Image4,
                    price: 72,
                    category: 'Trasporte',
                    quantity: 61,
                    inventoryStatus: 'INSTOCK',
                    rating: 4
                },
                {
                    id: '1002',
                    code: 'zz21cz3c1',
                    name: 'Estacion de Taxi',
                    description: 'Product Description',
                    image: Imgen3,
                    price: 79,
                    category: 'Fitness',
                    quantity: 2,
                    inventoryStatus: 'LOWSTOCK',
                    rating: 3
                }
            ];
        },

        getProductsWithOrdersData() {
            return [
                {
                    id: '1000',
                    code: 'f230fh0g3',
                    name: 'Bamboo Watch',
                    description: 'Product Description',
                    image: Imgen6,
                    price: 65,
                    category: 'Accessories',
                    quantity: 24,
                    inventoryStatus: 'INSTOCK',
                    rating: 5,
                    orders: [
                        {
                            id: '1000-0',
                            productCode: 'f230fh0g3',
                            date: '2020-09-13',
                            amount: 65,
                            quantity: 1,
                            customer: 'David James',
                            status: 'PENDING'
                        },
                        {
                            id: '1000-1',
                            productCode: 'f230fh0g3',
                            date: '2020-05-14',
                            amount: 130,
                            quantity: 2,
                            customer: 'Leon Rodrigues',
                            status: 'DELIVERED'
                        },
                        {
                            id: '1000-2',
                            productCode: 'f230fh0g3',
                            date: '2019-01-04',
                            amount: 65,
                            quantity: 1,
                            customer: 'Juan Alejandro',
                            status: 'RETURNED'
                        },
                        {
                            id: '1000-3',
                            productCode: 'f230fh0g3',
                            date: '2020-09-13',
                            amount: 195,
                            quantity: 3,
                            customer: 'Claire Morrow',
                            status: 'CANCELLED'
                        }
                    ]
                },
                {
                    id: '1000',
                    code: 'f230fh0g3',
                    name: 'Bamboo Watch',
                    description: 'Product Description',
                    image: Imgen5,
                    price: 65,
                    category: 'Accessories',
                    quantity: 24,
                    inventoryStatus: 'INSTOCK',
                    rating: 5,
                    orders: [
                        {
                            id: '1000-0',
                            productCode: 'f230fh0g3',
                            date: '2020-09-13',
                            amount: 65,
                            quantity: 1,
                            customer: 'David James',
                            status: 'PENDING'
                        },
                        {
                            id: '1000-1',
                            productCode: 'f230fh0g3',
                            date: '2020-05-14',
                            amount: 130,
                            quantity: 2,
                            customer: 'Leon Rodrigues',
                            status: 'DELIVERED'
                        },
                        {
                            id: '1000-2',
                            productCode: 'f230fh0g3',
                            date: '2019-01-04',
                            amount: 65,
                            quantity: 1,
                            customer: 'Juan Alejandro',
                            status: 'RETURNED'
                        },
                        {
                            id: '1000-3',
                            productCode: 'f230fh0g3',
                            date: '2020-09-13',
                            amount: 195,
                            quantity: 3,
                            customer: 'Claire Morrow',
                            status: 'CANCELLED'
                        }
                    ]
                },
                {
                    id: '1000',
                    code: 'f230fh0g3',
                    name: 'Bamboo Watch',
                    description: 'Product Description',
                    image: Imgen1,
                    price: 65,
                    category: 'Accessories',
                    quantity: 24,
                    inventoryStatus: 'INSTOCK',
                    rating: 5,
                    orders: [
                        {
                            id: '1000-0',
                            productCode: 'f230fh0g3',
                            date: '2020-09-13',
                            amount: 65,
                            quantity: 1,
                            customer: 'David James',
                            status: 'PENDING'
                        },
                        {
                            id: '1000-1',
                            productCode: 'f230fh0g3',
                            date: '2020-05-14',
                            amount: 130,
                            quantity: 2,
                            customer: 'Leon Rodrigues',
                            status: 'DELIVERED'
                        },
                        {
                            id: '1000-2',
                            productCode: 'f230fh0g3',
                            date: '2019-01-04',
                            amount: 65,
                            quantity: 1,
                            customer: 'Juan Alejandro',
                            status: 'RETURNED'
                        },
                        {
                            id: '1000-3',
                            productCode: 'f230fh0g3',
                            date: '2020-09-13',
                            amount: 195,
                            quantity: 3,
                            customer: 'Claire Morrow',
                            status: 'CANCELLED'
                        }
                    ]
                },
                {
                    id: '1000',
                    code: 'f230fh0g3',
                    name: 'Bamboo Watch',
                    description: 'Product Description',
                    image: Imgen2,
                    price: 65,
                    category: 'Accessories',
                    quantity: 24,
                    inventoryStatus: 'INSTOCK',
                    rating: 5,
                    orders: [
                        {
                            id: '1000-0',
                            productCode: 'f230fh0g3',
                            date: '2020-09-13',
                            amount: 65,
                            quantity: 1,
                            customer: 'David James',
                            status: 'PENDING'
                        },
                        {
                            id: '1000-1',
                            productCode: 'f230fh0g3',
                            date: '2020-05-14',
                            amount: 130,
                            quantity: 2,
                            customer: 'Leon Rodrigues',
                            status: 'DELIVERED'
                        },
                        {
                            id: '1000-2',
                            productCode: 'f230fh0g3',
                            date: '2019-01-04',
                            amount: 65,
                            quantity: 1,
                            customer: 'Juan Alejandro',
                            status: 'RETURNED'
                        },
                        {
                            id: '1000-3',
                            productCode: 'f230fh0g3',
                            date: '2020-09-13',
                            amount: 195,
                            quantity: 3,
                            customer: 'Claire Morrow',
                            status: 'CANCELLED'
                        }
                    ]
                },
                {
                    id: '1001',
                    code: 'nvklal433',
                    name: 'Black Watch',
                    description: 'Product Description',
                    image: Image4,
                    price: 72,
                    category: 'Accessories',
                    quantity: 61,
                    inventoryStatus: 'INSTOCK',
                    rating: 4,
                    orders: [
                        {
                            id: '1001-0',
                            productCode: 'nvklal433',
                            date: '2020-05-14',
                            amount: 72,
                            quantity: 1,
                            customer: 'Maisha Jefferson',
                            status: 'DELIVERED'
                        },
                        {
                            id: '1001-1',
                            productCode: 'nvklal433',
                            date: '2020-02-28',
                            amount: 144,
                            quantity: 2,
                            customer: 'Octavia Murillo',
                            status: 'PENDING'
                        }
                    ]
                },
                {
                    id: '1002',
                    code: 'zz21cz3c1',
                    name: 'Blue Band',
                    description: 'Product Description',
                    image: Imgen3,
                    price: 79,
                    category: 'Fitness',
                    quantity: 2,
                    inventoryStatus: 'LOWSTOCK',
                    rating: 3,
                    orders: [
                        {
                            id: '1002-0',
                            productCode: 'zz21cz3c1',
                            date: '2020-07-05',
                            amount: 79,
                            quantity: 1,
                            customer: 'Stacey Leja',
                            status: 'DELIVERED'
                        },
                        {
                            id: '1002-1',
                            productCode: 'zz21cz3c1',
                            date: '2020-02-06',
                            amount: 79,
                            quantity: 1,
                            customer: 'Ashley Wickens',
                            status: 'DELIVERED'
                        }
                    ]
                }
            ];
        },

        getProductsMini() {
            return Promise.resolve(this.getProductsData().slice(0, 5));
        },

        getProductsSmall() {
            return Promise.resolve(this.getProductsData().slice(0, 10));
        },

        getProducts() {
            return Promise.resolve(this.getProductsData());
        },

        getProductsWithOrdersSmall() {
            return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
        },

        getProductsWithOrders() {
            return Promise.resolve(this.getProductsWithOrdersData());
        }
    };