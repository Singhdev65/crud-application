const User = require("../models/user")

const catchAsync = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next)
  }
}

exports.getAllUsers = catchAsync((req, res, next) => {
  const users = User.find()

  res.status(200).json({
    status: "success",
    data: {
      users
    }
  })
})

exports.getUser = catchAsync((req, res, next) => {
  const user = User.findById(req.params.id)

  if (!user) {
    res.status(200).json({
      message: "No user found with that ID",
      data: {
        user
      }
    })
  }
  res.status(200).json({
    status: "success",
    data: {
      user
    }
  })
})

exports.updateUser = catchAsync((req, res, next) => {
  const user = User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })

  if (!user) {
    res.status(200).json({
      message: "No user found with that ID",
      data: {
        user
      }
    })
  }

  res.status(200).json({
    status: "success",
    data: {
      user
    }
  })
})

exports.deleteUser = catchAsync((req, res, next) => {
  const user = User.findByIdAndDelete(req.params.id)

  if (!user) {
    res.status(200).json({
      message: "No user found with that ID",
      data: {
        user
      }
    })
  }
  res.status(204).json({
    status: "success",
    data: user
  })
})
