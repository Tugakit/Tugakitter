import React from 'react';
import Tweeter from '../../Style/StyledComponents';
import { ReactComponent as HomeIcon } from '../../Assets/Accueil.svg';
import { ReactComponent as CommunityIcon } from '../../Assets/Communautés.svg';
import { ReactComponent as ExploreIcon } from '../../Assets/Explorer.svg';
import { ReactComponent as NotificationsIcon } from '../../Assets/Notifications.svg';
import { ReactComponent as MessagesIcon } from '../../Assets/Messages_Header.svg';
import { ReactComponent as ProfileIcon } from '../../Assets/Profil.svg';
import { ReactComponent as DotsIcon } from '../../Assets/Plus.svg';
import { ReactComponent as Logo } from '../../Assets/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="text-2xl w-1/5 ml-10 text-center place-container-around container ">
      <Logo fill="white" width="32px" className="mb-20 mr-20"  />
       {/* TODO Ajouter une fonction pour invertir les couleurs du Logo quand on est sur Home. On peut faire avec ca: className="invert"*/}
      <Link to="/" className="flex place-content-left pl-10 highlight">
        <HomeIcon fill="" stroke="white" width="26px" class="highlight" />
        <p className=" Pnav highlight ">Home</p>
      </Link>
      <Link to="/Explore" className="flex place-content-left pl-10 highlight">
        <ExploreIcon fill="white" stroke="" width="26px" class="highlight" />
        <p className="Pnav highlight">Explore </p>
      </Link>
      <Link to="/Communities" className="flex place-content-left pl-10 highlight">
        <CommunityIcon fill="white" stroke="" width="26px" />
        <p className="Pnav highlight">Communities </p>
      </Link>
      <Link to="/Notifications" className="flex place-content-left pl-10 highlight">
        <NotificationsIcon fill="white" stroke="" width="26px" />
        <p className="Pnav highlight">Notifications </p>
      </Link>
      <Link to="/Messages" className="flex place-content-left pl-10 highlight">
        <MessagesIcon fill="white" stroke="" width="26px" />
        <p className="Pnav highlight">Messages </p>
      </Link>
      <Link to="/Profile" className="flex place-content-left pl-10 highlight">
        <ProfileIcon fill="white" stroke="" width="26px" />
        <p className="Pnav highlight">Profile</p>
      </Link>
      <Link to="/Settings" className="flex place-content-left pl-10 highlight">
        <DotsIcon fill="white" stroke="" width="26px" />
        <p className="Pnav highlight">Plus </p>
      </Link>
      <Tweeter></Tweeter>
    </div>
  );
}

export default Header;
