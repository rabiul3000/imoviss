import bcrypt from "bcryptjs";

const comparePassword = async (password, dbPassword) => {
  const match = await bcrypt.compare(password, dbPassword);

  if (!match) return false;
  else return true;
};

export default comparePassword;
