import { notification } from "antd";

export const addNotification = (type: "success") => {
  notification[type]({
    message: "محصول با موفقیت اضافه شد",
  });
};

export const editNotification = (type: "success") => {
  notification[type]({
    message: "محصول با موفقیت ویرایش شد",
  });
};

export const deleteNotification = (type: "success") => {
  notification[type]({
    message: "محصول با موفقیت حذف شد",
  });
};
