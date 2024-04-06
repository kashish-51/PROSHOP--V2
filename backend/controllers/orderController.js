import asyncHandler from '../middleware/asyncHandler.js'
import Order from "../models/orderModel.js";

//@desc create new order
//@route POST /api/orders
//@access Private

const addOrderItems = asyncHandler(async (req, res) => {
     // Destructure request body to extract required data
const {orderItems,
   shippingAddress, 
     paymentMethod, 
     itemsPrice, 
     taxPrice, 
     shippingPrice, 
     totalPrice} = req.body;

     if(orderItems && orderItems.length === 0){   
         // If orderItems is empty, send a 400 Bad Request response with a message and throw an error
        res.json(404);
        throw new Error("No order items");
     }else{
        // If orderItems exist, create a new Order document
        const order = new Order({
             // Map each item in orderItems array to a new object with modified properties
            orderItems:orderItems.map((x)=>({
                ...x,
                product:x._id,   // Set the product property to the _id of the item
                _id:undefined   // Remove _id property from each item
            })),

            // Assuming req.user contains information about the logged-in user
            user:req.user._id, 
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        });
        const createOrder = await order.save();

        res.status(201).json(createOrder);
     }
})

//@desc Get logged in user orders
//@route GET /api/orders/myorders
//@access Private

const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({user:req.user._id});
  res.status(200).json(orders);
    })

//@desc cGet order by ID
//@route GET /api/orders/:id
//@access Private

const getOrderById = asyncHandler(async (req, res) => {
const order = await Order.findById(req.params.id).populate('user','name email') //.user's name and email is not in the order model so we are taking them out from user model using populate method
if(order){
    res.status(200).json(order);

}else{
    res.status(404);
    throw new Error('Order not found');
}
})

//@desc Update order to paid
//@route put /api/orders/:id/pay
//@access Private

const updateOrderToPaid = asyncHandler(async (req, res) => {
   const order = await Order.findById(req.params.id);

   if(order){
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.payer.email_address, //this stuff is going to come from paypal once is order is made
    };

    const updatedOrder = await order.save();

    res.status(200).json(updatedOrder);
   }else{
    res.status(404);
    throw new Error('Order not found')
   }
});

//@desc update order to delivered
//@route put /api/orders/:id/deliver
//@access Private/Admin

const updateOrderToDelivered = asyncHandler(async (req, res) => {
    res.send('update order to delivered')
    })

//@desc Get all orders
//@route GET/api/orders
//@access Private/Admin

const getOrders = asyncHandler(async (req, res) => {
    res.send('get all orders')
    })

export{
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
    getOrders,
};