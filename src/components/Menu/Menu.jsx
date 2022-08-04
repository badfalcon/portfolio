import './Menu.css';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

export const Menu = () => {
  return <nav className="MenuBar">
    <IconButton>
      <HomeIcon />
    </IconButton>
    <IconButton>
      <WorkHistoryIcon />
    </IconButton>
  </nav>;
}


export default Menu;