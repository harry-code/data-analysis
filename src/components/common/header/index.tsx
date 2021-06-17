import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

export default () => {
  // const pathname = window.location.pathname
  // const currentPage = menuData.find(item => item.pathname === pathname)
  return (
    <div className="header">
      <Link to="/#" className="logo">国科科技信息有限公司</Link>
    </div>
  )
}