import './About.css';
import { Link } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'

export const About = () => {
    return <div className="container about_container">
        <h1>Hi, I am Jun Masuda.</h1>
        <h3>fullstack programmer</h3>
        <p>
            I like to make amazing experience by programming.<br />
            And making things nobody did is fun too.
        </p>
        <IconButton>
            <Link href="https://github.com/badfalcon" target="_blank" color="primary">
                <GitHubIcon />
            </Link>
        </IconButton>
        <IconButton>
            <Link href="https://twitter.com/falcon610" target="_blank" color="primary">
                <TwitterIcon />
            </Link>
        </IconButton>

    </div>;
}

export default About;