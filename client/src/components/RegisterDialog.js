import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";

export default function RegisterDialog() {
  const [visible, setVisible] = useState(false);
  const footerContent = (
    <div>
      <Button
        label="No"
        icon="pi pi-times"
        onClick={() => setVisible(false)}
        className="p-button-text"
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        onClick={() => setVisible(false)}
        autoFocus
      />
    </div>
  );

  return (
    <div className="flex justify-content-center">
      <Button
        label="No Account ? Please register here"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Register"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
        footer={footerContent}
      >
        <p className="mb-5">
          <div className="flex flex-column gap-2">
            <label htmlFor="firstname">Firstname</label>
            <InputText id="firstname" aria-describedby="firstname-help" tooltip="Enter your firstname"/>
          </div>
        </p>
        <p className="mb-5">
          <div className="flex flex-column gap-2">
            <label htmlFor="lastname">Lastname</label>
            <InputText id="lastname" aria-describedby="lastname-help" tooltip="Enter your lastname"/>
          </div>
        </p>
        <p className="mb-5">
          <div className="flex flex-column gap-2">
            <label htmlFor="username">Username</label>
            <InputText id="username" aria-describedby="username-help" tooltip="Enter your username"/>
          </div>
        </p>
        <p className="mb-5">
          <div className="flex flex-column gap-2">
            <label htmlFor="password">Password</label>
            <InputText id="password" aria-describedby="password-help" tooltip="Enter your password"/>
          </div>
        </p>
        <p className="mb-5">
          <div className="flex flex-column gap-2">
            <label htmlFor="retype_password">Retype your Password</label>
            <InputText
              id="retype_password"
              aria-describedby="retype_password-help"
              tooltip="Please retype the password"
            />
          </div>
        </p>
        <p className="mb-5">
          <div className="flex flex-column gap-2">
            <label htmlFor="email">Email</label>
            <InputText id="email" aria-describedby="email-help" tooltip="Enter your email"/>
          </div>
        </p>
      </Dialog>
    </div>
  );
}
