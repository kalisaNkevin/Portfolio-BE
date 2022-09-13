import catchAsync from '../utls/catchAsync.js';
import messageModel from '../models/messageModels.js';

export const createMessage = catchAsync(async (req, res, next) => {
  const message = await messageModel.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      message,
    },
  });
});
