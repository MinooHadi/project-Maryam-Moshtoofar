export const loginRules = {
  userName: [
    { required: true, message: "نام کاربری الزامی است" },
    { min: 4, message: "نام کاربری  باید حداقل ۴ حرفی باشد" },
  ],
  password: [
    { required: true, message: "رمز عبور الزامی است" },
    { min: 4, message: "رمز عبور باید حداقل ۴ حرفی باشد" },
  ],
};
