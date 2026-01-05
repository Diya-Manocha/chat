export const projectRoute = async (req, res, next) => {
  try {
    const token = req.headers.token;
    const decoded = jwt.verify(token, process.env.JWT_SERCET);
    const user = await user.findById(decoded.userId).select("-password");
    if (!user) return res.json({ success: "false", message: "User not found" });
    req.user = user;
    next();
  } catch (error) {
    res.json({ success: "false", message: error.message });
  }
};

export const checkAuth = (req, res) => {
  res.json({ success: true, user: req.user });
};
