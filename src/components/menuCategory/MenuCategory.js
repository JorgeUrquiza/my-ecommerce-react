import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom";

const MenuCategory = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const styles = {
        popUpBtn: {
            textDecoration: "none",
            color: "white",
            fontSize: 16,
            fontWeight: "500",
            textTransform: "lowercase",
        },
        upperText: {
            textTransform: "uppercase",
        },
        link: {
            color: "black",
            fontSize: 18,
            textDecoration: "none",
        },
    };

    return (
        <div>
            <Button
                style={styles.popUpBtn}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                <span style={styles.upperText}>Categorias</span>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <MenuItem>
                    <Link to="/categoria/perros" style={styles.link}>
                        Perros
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/categoria/gatos" style={styles.link}>
                        Gatos
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/categoria/peces" style={styles.link}>
                        Peces
                    </Link>
                </MenuItem>
            </Menu>
        </div>
    );
};

export default MenuCategory;
