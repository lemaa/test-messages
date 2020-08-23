import React, { useState } from "react";
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import { HeaderStyle, HeaderTitle } from './HeaderStyle';

function Header(props) { 
    const [title] = useState(props.title);
  return (
    <HeaderStyle  className="app-header" fluid>
        <HeaderTitle className="header-title">
            <Col>
                <h5 className="font-weight-bold text-center">{title}</h5>
            </Col>
        </HeaderTitle>
    </HeaderStyle>
  );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
  };
export default Header;