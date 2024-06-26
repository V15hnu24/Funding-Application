// const Razorpay = require("razorpay");
// const shortid = require("shortid");
import Razorpay from "razorpay";
import shortid from "shortid";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log('POST request at /api/razorpay');
    
    // Initialize razorpay object
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    // Create an order -> generate the OrderID -> Send it to the Front-end
    // const {amount} = req.body;
    // console.log("amount = ", req.body.amount);
    
    const payment_capture = 1;
    const currency = "INR";
    const options = {
      amount: (req.body.amount * 100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  } else {
    // Handle any other HTTP method
  }
}
