const router = require("express").Router();
const expressAsyncHandler = require("express-async-handler");
const {
  PaymentController,
} = require("../../http/controllers/payment/payment.controller");
const { verifyAccessToken } = require("../../http/middlewares/user.middleware");

router.get(
  "/list",
  verifyAccessToken,
  expressAsyncHandler(PaymentController.getListOfPayments)
);
router.get("/:id", expressAsyncHandler(PaymentController.getOnePayment));

module.exports = {
  paymentAdminRoutes: router,
};
