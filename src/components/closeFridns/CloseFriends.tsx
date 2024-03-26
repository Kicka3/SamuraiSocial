import "./closeFriends.css"

export function CloseFriends() {
   const PF = process.env.REACT_APP_PUBLIC_FOLDER;
   return (
      <div>
         <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={'assets/person/person0.jpeg'} alt="" />
            <span className="sidebarFriendName"></span>
         </li>
      </div>
   )
}
