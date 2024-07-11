const avatar = (gender, username) => {
  if (gender === "male")
    return `https://avatar.iran.liara.run/public/boy?username=${username}`;
  else if (gender === "female")
    return `https://avatar.iran.liara.run/public/girl?username=${username}`;
  else throw new Error("invalid gender");
};

export default avatar;
