/**
 *
 * AccountPage
 *
 * Pages
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { useStore } from 'store';

const AccountPage = () => {
  const [{ user }] = useStore();
  return (
    <div>
      <h1>{JSON.stringify(user)}</h1>
    </div>
  );
};

AccountPage.propTypes = {};

export default AccountPage;
