/**Determine if current user is a mobile user or not
* @returns true iff mobile user, false otherwise
*/
export default function isMobileUser(){
 if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent)) {
   return true;
 }
 return false;
}