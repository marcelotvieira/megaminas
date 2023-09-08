import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

// import { Container } from './styles';

function MenuDrawer() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="menu-drawer">
      <Button type="link" onClick={showDrawer}>
        <MenuOutlined />
      </Button>

      <Drawer title="Menu" placement="right" onClose={onClose} open={open}>
        <p>
          <Link onClick={onClose} className="menu-opt" to="/">Início</Link>
        </p>
        <p>
          <Link onClick={onClose} className="menu-opt" to="/about">Quem somos</Link>
        </p>
        <p>
          <Link onClick={onClose} className="menu-opt" to="/providers">Fornecedores</Link>
        </p>
      </Drawer>
    </div>
  );
}

export default MenuDrawer;
