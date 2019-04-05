import React from 'react';
import { Contacts as ContactsComponent } from 'components/contacts/contacts';
import { Themes } from 'components/shared/themes/themes';

export function Contacts({ isMobile, isTabletSm }) {
  return (
    <Themes isMobile={isMobile} isTabletSm={isTabletSm}>
      <ContactsComponent />
    </Themes>
  );
}