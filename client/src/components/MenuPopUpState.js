import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function MenuPopupState(props) {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button {...bindTrigger(popupState)}>
            {props.buttonName}
          </Button>
          <Menu {...bindMenu(popupState)}>
            {props.navList.map(elem => {
                return (
                    <MenuItem onClick={popupState.close}>{elem}</MenuItem>
                );
            })}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}