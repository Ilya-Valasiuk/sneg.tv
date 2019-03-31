import React, { Fragment } from 'react';
import { HeaderNews } from 'components/header-news/header-news';
import { Contacts as ContactsComponent } from 'components/contacts/contacts';

export function Contacts({ isMobile }) {
  return (
    <Fragment>
      {!isMobile && <HeaderNews />}
      <ContactsComponent />
    </Fragment>

  );
}