import { INotification } from "@/types";
import React from "react";

interface IAlertBox {
  notification: INotification;
}

export const AlertBox: React.FC<IAlertBox> = ({ notification }) => {
  if (notification.content) {
    return (
      <div className={`notification is-${notification.type}`}>
        {notification.content}
      </div>
    );
  }
};
