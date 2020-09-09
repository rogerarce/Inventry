import { Orders } from './core/models/order';
import { Products } from './core/models/product';
import { User } from './core/models/user';

export const product: Products = [
  {
    product_id: '2',
    name: 'Bamboo Charcoal',
    price: 120.00,
    description: 'lorem ipsum',
    category: '',
    created_at: new Date(),
    updated_at: new Date(),
    status: '',
  },
  {
    product_id: '2',
    name: 'Skinness Soup',
    price: 100.00,
    description: 'lorem ipsum',
    category: '',
    created_at: new Date(),
    updated_at: new Date(),
    status: '',
  },
  {
    product_id: '3',
    name: 'Skinnes chicken skin soup',
    price: 1100.00,
    description: 'lorem ipsum',
    category: '',
    created_at: new Date(),
    updated_at: new Date(),
    status: '',
  },
  {
    product_id: '4',
    name: 'Skinnes chicken skin soup',
    price: 1000.00,
    description: 'lorem ipsum',
    category: '',
    created_at: new Date(),
    updated_at: new Date(),
    status: '',
  }
];

export const orders: Orders = [
  {
    order_id: '1',
    quantity: 200,
    total: 10000,
    status: 'cancel',
    product: {
      product_id: '1',
      name: 'Bamboo Charcoal',
      price: 10.00,
      description: 'lorem ipsum',
      category: '',
      created_at: new Date(),
      updated_at: new Date(),
      status: '',
    },
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    order_id: '2',
    quantity: 400,
    total: 50000,
    status: 'completed',
    product: {
      product_id: '1',
      name: 'Bamboo Charcoal',
      price: 10.00,
      description: 'lorem ipsum',
      category: '',
      created_at: new Date(),
      updated_at: new Date(),
      status: '',
    },
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    order_id: '3',
    quantity: 400,
    total: 50000,
    status: 'pending',
    product: {
      product_id: '1',
      name: 'Bamboo Charcoal',
      price: 10.00,
      description: 'lorem ipsum',
      category: '',
      created_at: new Date(),
      updated_at: new Date(),
      status: '',
    },
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    order_id: '4',
    quantity: 400,
    total: 50000,
    status: 'onhold',
    product: {
      product_id: '1',
      name: 'Bamboo Charcoal',
      price: 10.00,
      description: 'lorem ipsum',
      category: '',
      created_at: new Date(),
      updated_at: new Date(),
      status: '',
    },
    created_at: new Date(),
    updated_at: new Date()
  }
];

export const user = new User(
  '1',
  'admin',
  'admin',
  'test@admin.com',
  '12313123123123',
  'admin'
);
